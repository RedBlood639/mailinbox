import { getMyLetters, removeLetter } from "actions/letterAction";
import { LetterListCardDiv } from "components/letterlistcard/letterlistcard.styled";
import MyLetterCard from "components/mylettercard";
import PlusButton from "components/plusbtn";
import SearchBox from "components/SearchBox";
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
  const [fitlerData, setFitlerData] = useState<any>([]);
  const [delId, setDelId] = useState("");
  const router = useRouter();
  const [show, setShow] = useState(false);

  const [loading, setLoading] = useState<boolean>(false);

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
      const temp = state.filter((item: any) => item._id !== delId);
      setState(temp);
      setFitlerData(temp);
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

  const selectFilterChanged = async (e: any) => {
    switch (e.value) {
      case "newest":
        break;
      case "latest":
        break;
      default:
        break;
    }
  };

  const inputFilterChanged = (e: any) => {
    const temp_str = e.target.value.toLowerCase();
    setFitlerData(
      state.filter(
        (item: any) =>
          item.from.toLowerCase().includes(temp_str) ||
          item.to.toLowerCase().includes(temp_str) ||
          item.plainText.toLowerCase().includes(temp_str)
        // item.snippet.toLowerCase().includes(temp_str)
      )
    );
  };

  useEffect(() => {
    setLoading(true);
    const getData = async () => {
      const res = await getMyLetters(getMyInfo().email);
      setState(res);
      setFitlerData(res);
      setLoading(false);
    };
    getData();
  }, []);

  return (
    <React.Fragment>
      <ToastContainer />
      <HeaderSection />
      <HomeContainer>
        <Container>
          <Div justifyContent="space-between">
            <Div w={60} mode="column" gap={30}>
              <Div justifyContent="space-between" gap={20} alignItems="center">
                <SearchBox
                  options={[
                    { value: "all", label: "All" },
                    { value: "popular", label: "Popular" },
                    { value: "newest", label: "Newest" },
                    { value: "latest", label: "Latest" },
                  ]}
                  onSelectChange={selectFilterChanged}
                  onInputChange={inputFilterChanged}
                />
                <PlusButton onClick={handlePlusClick} />
              </Div>
              {loading ? (
                <LetterListCardDiv
                  style={{ textAlign: "center", fontSize: 20 }}
                >
                  Loading ...
                </LetterListCardDiv>
              ) : (
                <>
                  {fitlerData.length > 0 ? (
                    fitlerData.map((item: any, key: any) => (
                      <MyLetterCard
                        key={key}
                        data={item}
                        onClick={() => router.push("/letter/" + item._id)}
                        onDelete={handleDeleteClick}
                      />
                    ))
                  ) : (
                    <LetterListCardDiv
                      style={{ textAlign: "center", fontSize: 20 }}
                    >
                      No Data
                    </LetterListCardDiv>
                  )}
                </>
              )}
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
          {"You can't recovery this letter after delete. Are you sure?"}
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
