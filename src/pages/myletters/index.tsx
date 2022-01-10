import { getMyLetters, removeLetter } from "actions/letterAction";
import MyInfoCard from "components/myinfocard/MyInfoCard";
import MyLetterCard from "components/mylettercard";
import PlusButton from "components/plusbtn";
import UnsentLetters from "components/unsentlettercard";
import { HeaderSection } from "layout";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { toast, ToastContainer } from "react-toastify";
import { Container, Div, HomeContainer } from "styles/globals.styled";
import { getMyInfo } from "utils/getMyInfo";

const MyLettersPage = () => {
  const [state, setState] = useState<any>([]);
  const [delId, setDelId] = useState("");
  const router = useRouter();
  const [show, setShow] = useState(false);

  const handleDelete = async () => {
    const res = await removeLetter(delId);
    if (res.error) {
      toast.error("Server Error", {
        theme: "colored",
        autoClose: 3000,
      });
    } else {
      toast.success("A Letter deleted successfully.", {
        theme: "colored",
        autoClose: 3000,
      });
    }
    setShow(false);
  };

  const handleDeleteClick = (id: any) => {
    setShow(true);
    setDelId(id);
  };

  const handleClose = () => {
    setShow(false);
  };
  const handlePlusClick = () => {
    router.push("/newletter");
  };

  useEffect(() => {
    const getData = async () => {
      const res = await getMyLetters(getMyInfo().email);
      setState(res);
    };
    getData();
  }, [state]);

  return (
    <React.Fragment>
      <ToastContainer />
      <HeaderSection />
      <HomeContainer>
        <Container>
          <Div justifyContent="space-between">
            <Div w={60} mode="column" gap={30}>
              <Div justifyContent="space-between" alignItems="center">
                <MyInfoCard />
                <PlusButton onClick={handlePlusClick} />
              </Div>
              {state.map((item: any, key: any) => (
                <MyLetterCard
                  key={key}
                  data={item}
                  onClick={() => router.push("/letter/" + item._id)}
                  onDelete={handleDeleteClick}
                />
              ))}
            </Div>
            <Div w={30} mode="column" gap={30}>
              <UnsentLetters />
            </Div>
          </Div>
        </Container>
      </HomeContainer>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Delete Letter!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          You can't recovery this letter after delete. Are you sure?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="danger" onClick={handleDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </React.Fragment>
  );
};

export default MyLettersPage;
