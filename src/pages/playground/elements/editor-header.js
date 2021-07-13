import styled from "styled-components";
import Button from "../../../components/button/";
import { Play, EditSquare, Setting } from "../../../assets/icons/";
import Modal from "../../../components/modal";
import { useState } from "react";
import Text from "../../../components/Text";
import { Toggle } from "../../../components/form/";
import { useListen, useRunCodeOnPlayground } from "../../../hooks/problems";
import { updateState, useMutation } from "../../../hooks/";
import toast from "react-hot-toast";
import Tooltip from "../../../components/tooltip";
import PlaygroundModal from "../../../components/playground-modal";

const EditorHeaderContainer = styled.div`
  background: ${({ theme }) => theme.colors.light[4]};
  padding: 1rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.light[1]};
  display: flex;
  justify-content: space-between;
  align-items: center;
  .left {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    > :not(:last-child) {
      margin-right: 0.8rem;
    }
  }
`;
const Settings = () => {
  const [show, setSow] = useState(false);
  const open = () => setSow(true);
  const close = () => setSow(false);
  return (
    <div>
      <Button onClick={open} small icon type="light">
        <Setting />
      </Button>
      <Modal show={show} onHide={close}>
        <Modal.Title>
          <Text type="h3" bold mg="0">
            Code Editor Settings
          </Text>
        </Modal.Title>
        <Modal.Body>
          <Toggle name="theme" big>
            <Text type="p" layer={1} mg="0">
              Activate the dark theme
            </Text>
          </Toggle>
        </Modal.Body>
        <Modal.Footer>
          <Button small onClick={close} mg="0 1rem 0 0">
            Confirm
          </Button>
          <Button small type="light" onClick={close}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

const SavePlaygroundModel = ({ code }) => {
  const [show, setSow] = useState(false);
  const open = () => setSow(true);
  const close = () => setSow(false);
  return (
    <>
      <Button small icon onClick={open} type="light">
        Save &nbsp; <EditSquare />
      </Button>
      <PlaygroundModal
        show={show}
        close={close}
        method="post"
        path="/code"
        message="Playground Saved successfully"
        data={{ code }}
      />
    </>
  );
};
const NotSignedUser = () => {
  return (
    <Tooltip message="You have to login first" place="right" name="save">
      <Button small icon disabled={true} type="light">
        Save &nbsp; <EditSquare />
      </Button>
    </Tooltip>
  );
};
const initialData = `#include <iostream>;
using namespace std;
int main(){
cout<<"Hello, AlgoSolver!"<<endl;
return 0;
}`;
const ControllButtons = ({ id, name, userId, isSignedPlayground }) => {
  const code = useListen("playground-code", !isSignedPlayground ? {initialData}:{});
  const input = useListen("playground-input");
  const { mutate: saveMutate, isLoading: saveLoading, data } = useMutation(
    "/code/" + id,
    "patch"
  );

  const { mutate, isLoading } = useRunCodeOnPlayground();
  const runCode = () => {
    updateState("playground-console", {
      codeStatus: "Compiling Program..",
    });
    console.log(code.data,input.data);
    mutate({
      sourceCode: code.data,
      input: input.data || "0",
      lang: "C++",
      timeLimit: 2,
    });
  };

  return (
    <div className="left ">
      <Text mg="0" pd="0" layer="1" type="h5">
        {name || "Untitled"}
      </Text>
      <Button icon small disabled={isLoading} onClick={runCode}>
        Run &nbsp; <Play />
      </Button>
      {!userId ? (
        <NotSignedUser />
      ) : isSignedPlayground ? (
        <Button
          small
          onClick={() => {
            saveMutate(
              { code: code.data },
              {
                onSuccess: () => {
                  toast.success(<Text type="h5">Saved Successfuly</Text>);
                },
                onError: (err) => {
                  toast.error(
                    <Text type="h4">{err.message || "un expected error"}</Text>
                  );
                },
              }
            );
          }}
          icon
          disabled={isLoading || data?.code === code.data}
          loading={saveLoading}
          type="light"
        >
          Save &nbsp; <EditSquare />
        </Button>
      ) : (
        <SavePlaygroundModel code={code.data} />
      )}
    </div>
  );
};
const EditorHeader = ({ id, name, isSignedPlayground }) => {
  const user = useListen("auth");
  return (
    <EditorHeaderContainer>
      <ControllButtons
        id={id}
        name={name}
        isSignedPlayground={isSignedPlayground}
        userId={user?.data?._id}
      />
      <div className="right">
        <Settings />
      </div>
    </EditorHeaderContainer>
  );
};

export default EditorHeader;
