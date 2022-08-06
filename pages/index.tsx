import type { GetServerSideProps, GetStaticProps, NextPage } from "next";
import { connectDB } from "../utils/dbConnect";
import styles from "../styles/Home.module.css";
import Users from "../model/User";

interface Props {
  users: [];
}

interface IUser {
  id: string;
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
  const users = await Users.find({}).catch((err: Error) => console.log(err));

  console.log("USERS:", users);

  return {
    props: {
      users: JSON.parse(JSON.stringify(users)),
    },
  };
};

export default Home;
