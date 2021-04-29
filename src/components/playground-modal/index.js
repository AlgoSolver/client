import Button from "../button";
import Text from "../Text";
import Modal from "../modal";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import client, { useMutation } from "../../hooks/";
import toast from "react-hot-toast";
import { TextInput } from "../form";
import { checkErrors } from "../../shared/libs/error-messages";


const PlaygroundModal =  ({
  defaultValue='',
  close,
  show,
  method,
  path,
  message
})=> {
  const history = useHistory();
  const { isLoading, mutate } = useMutation(path,method);
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (e) => {
    if(e.name === defaultValue){
      toast.error(
        <Text type="h4">Add new name to your playground</Text>
      );
      return;
    }
    mutate(e, {
      onSuccess: (data) => {
        toast.success(<Text type="h4">{message}</Text>);
        client.setQueryData("codes", (oldData) => {

          if (oldData?.pages[0]?.docs) {
            let newData = oldData.pages.map((item) => item.docs).flat();
            if(method === 'patch'){
              newData = newData.map(item=> item._id === data._id ? data : item);
            }
            else {
              newData.unshift(data);
            }
            return {
              ...oldData,
              pages: [
                {
                  docs: newData
                },
              ],
            };
          }
          return {
            pages: [
              {
                docs: [data],
              },
            ],
          };
        });
        method === 'post' ? history.push("/playground/" + data._id) : close();
      },
      onError: (err) =>
        toast.error(
          <Text type="h4">{err.message || "un expected error"}</Text>
        ),
    });
  };
  return <Modal show={show} onHide={close}>
    <form onSubmit={handleSubmit(onSubmit)}>
      <Modal.Title>
        <Text type="h3" bold mg="0">
          Create New Playground
        </Text>
      </Modal.Title>
      <Modal.Body>
        <TextInput
          placeholder="Enter the name for your playground"
          type="text"
          defaultValue={defaultValue}
          name="name"
          register={register({
            required: true,
            maxLength: 32,
            minLength: 6,
          })}
          error={checkErrors("name", errors)}
        />
      </Modal.Body>
      <Modal.Footer>
        <Button loading={isLoading} small mg="0 1rem 0 0">
          Confirm
        </Button>
        <Button small buttonType="button" type="light" onClick={close}>
          Cancel
        </Button>
      </Modal.Footer>
    </form>
  </Modal>
}
export default PlaygroundModal;
