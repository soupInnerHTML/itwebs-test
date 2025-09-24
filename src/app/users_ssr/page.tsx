import {User} from "@/components/User/User";
import {fetchUsers} from "@/lib/api/users";
import {Header} from "@/components/Header/Header";
import {Row} from "@/components/Row/Row";


export default async function SSRPage() {
  const users = await fetchUsers();

  return (
    <section className="p-6">
      <Header>👥 Users (SSR)</Header>
      <Row>
        {users.map(({id, ...user}) => (
          <User key={id} {...user} />
        ))}
      </Row>
    </section>
  );
}
