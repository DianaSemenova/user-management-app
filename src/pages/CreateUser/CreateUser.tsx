/* eslint-disable react-hooks/exhaustive-deps */
import { useParams } from "react-router-dom";
import { useAppDispatch } from "../../store/hooks";
import { useEffect } from "react";
import { Container } from "@mui/material";
import FormCreateUser from "../../components/FormCreateUser/FormCreateUser";
import { useLazyGetUserQuery } from "../../services/users";
import {
  setSelectedFoods,
  setUsername,
  setEmail,
  setBirthdate,
} from "../../store/slices/users";

interface ICreateUserProps {
  isEdit: boolean;
}

const CreateUser = ({ isEdit }: ICreateUserProps) => {
  const dispatch = useAppDispatch();
  const { id } = useParams();
  const [getUser, { data }] = useLazyGetUserQuery();

  const getUserInfo = async () => {
    try {
      await getUser(id);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (id && isEdit) {
      getUserInfo();
    }
  }, [id, isEdit]);

  useEffect(() => {
    if (data) {
      dispatch(setSelectedFoods(data.favorite_food_ids));
      dispatch(setUsername(data.username));
      dispatch(setEmail(data.email));
      dispatch(setBirthdate(data.birthdate));
    }
  }, [data]);

  return (
    <Container maxWidth="md">
      <FormCreateUser isEdit={isEdit} userInfo={data} />
    </Container>
  );
};

export default CreateUser;
