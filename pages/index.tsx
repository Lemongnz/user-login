import type { GetServerSideProps, GetStaticProps, NextPage } from "next";
import { connectDB } from "../utils/dbConnect";
import styles from "../styles/Home.module.css";
import User from "../model/User";

interface Props {
  users: [];
}

interface IUser {
  id: number;
  name: string;
  lastname: string;
  age: number;
}

const Home: NextPage<Props> = ({ users }) => {
  return (
    <div className={styles.container}>
      {users.map((user: IUser) => (
        <div key={user.id}>{user.name}</div>
      ))}
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  await connectDB();
  const pruebaUsers = await User.find({})
    .then((users: IUser[]) => console.log(users))
    .catch((err: Error) => console.log(err));

  console.log(pruebaUsers);

  let users: any = [];
  return {
    props: {
      users,
    },
  };
};

// export const getStaticProps: GetStaticProps = async () => {

// };

export default Home;
