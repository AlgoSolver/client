import styled from "styled-components";
import { useCodes } from "../../../hooks/codes";
import client, { useMutation } from "../../../hooks/";
import Button from "../../../components/button";
import { InlineLoading } from "../../../shared/loading";
import Text from "../../../components/Text";
import { Delete, Edit } from "../../../assets/icons";
import Modal from "../../../components/modal";
import toast from "react-hot-toast";
import { useState } from "react";
import PlaygroundModal from "../../../components/playground-modal";
import { Link } from "react-router-dom";
import Head from "../../../components/head/";

const Container = styled.div`
  padding: 4rem 0;
`;
const CodeContainer = styled.div`
  padding: 2rem;
  margin: 0 auto;
  background: ${({ theme }) => theme.colors.light[4]};
  margin-bottom: 1.5rem;
  border-radius: 1.5rem;
  box-shadow: ${({ theme }) => theme.elevation[3].shadow};
  max-width: 70rem;
  transition: transform 0.2s;

  .right {
    display: flex;
    gap: 0.8rem;
    justify-content: flex-end;
  }
`;

const DeleteCode = ({ codeId }) => {
  const { mutate, isLoading } = useMutation(`/code/${codeId}`, "delete");
  const [show, setSow] = useState(false);
  const open = () => setSow(true);
  const close = () => setSow(false);
  return (
    <>
      <Button type="light" onClick={open} circle icon>
        <Delete />
      </Button>
      <Modal size="xsmall" show={show} onHide={close}>
        <Modal.Title>
          <Text type="h3" bold mg="0">
            Deleting Background
          </Text>
        </Modal.Title>
        <Modal.Body>
          <Text type="p" color="red" size="1.5rem" layer="2">
            This playground will be deleted permentally and the is no way to get
            it back
          </Text>
        </Modal.Body>
        <Modal.Footer>
          <Button
            loading={isLoading}
            onClick={() => {
              mutate(null, {
                onSuccess: (data) => {
                  toast.success(
                    <Text type="h4">code deleted successfully</Text>
                  );
                  client.setQueryData("codes", (oldData) => {
                    let newData = oldData.pages
                      .map((item) => item.docs)
                      .flat()
                      .filter((item) => item._id !== codeId);
                    return {
                      ...oldData,
                      pages: [{ docs: newData }],
                    };
                  });
                  close();
                },
                onError: (err) =>
                  toast.error(
                    <Text type="h4">{err.message || "un expected error"}</Text>
                  ),
              });
            }}
            mg="0 .6rem 0 0"
            small
            type="red"
          >
            Delete
          </Button>
          <Button disabled={isLoading} small onClick={close} type="light">
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
const UpdateCode = ({ codeId, name }) => {
  const [show, setSow] = useState(false);
  const open = () => setSow(true);
  const close = () => setSow(false);
  return (
    <>
      <Button onClick={open} type="light" circle icon>
        <Edit />
      </Button>
      <PlaygroundModal
        defaultValue={name}
        show={show}
        close={close}
        method="patch"
        path={`/code/${codeId}`}
        message="Playground updated successfully"
      />
    </>
  );
};
const Code = ({ code }) => {
  return (
    <CodeContainer>
      <Text type="h4">
        <Link className="link" to={`/playground/${code._id}`}>
          {code.name || "Untitled"}
        </Link>
      </Text>
      {code?.updatedAt && (
        <Text type="p" size="1.4rem" mg="0" layer={2}>
          Last Modified: {new Date(code.updatedAt).toLocaleString()}
        </Text>
      )}
      <div className="right">
        <DeleteCode codeId={code._id} />
        <UpdateCode codeId={code._id} name={code.name} />
      </div>
    </CodeContainer>
  );
};
const CodeList = ({ data }) => {
  return data.docs.map((item) => <Code code={item} />);
};
const Codes = () => {
  const user = client.getQueryData("auth");
  const {
    status,
    data,
    isFetching,
    //  isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useCodes({
    getNextPageParam: (oldPage) => {
      return oldPage.nextPage;
    },
  });
  if (status === "loading")
    return (
      <Container className="wrapper">
        <InlineLoading />
      </Container>
    );
  return (
    <Container className="wrapper">
      <Head
        title="Your Playgrounds"
        description={`${user?.username} has ${data.pages.totalDocs} Playgrounds available`}
      />
      {data?.pages && <CodeList data={data.pages} />}
      {!data?.pages?.docs || data?.pages?.docs?.length === 0 ? (
        <Text center layer={2} color="red">
          You Don't have any playgrounds yet..
        </Text>
      ) : null}
      <div className="center">
        {hasNextPage && (
          <Button
            type="purple"
            big
            disabled={isFetching || status === "loading"}
            onClick={() => fetchNextPage()}
          >
            load more
          </Button>
        )}
      </div>
    </Container>
  );
};

export default Codes;
