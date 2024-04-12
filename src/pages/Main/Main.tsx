const Main = () => {
  return (
    <main className="container center">
      <nav>hhhh</nav>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>ID</th>
            <th>Фото</th>
            <th>Имя</th>
            <th>Email</th>
            <th>Дата рождения</th>
            <th>Любимая еда</th>
            <th>иконки</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>1</td>
            <td>
              <div>
                <img
                  src="public/user-placeholder.png"
                  alt="./user-placeholder.png"
                />
              </div>
            </td>
            <td>Серёжа</td>
            <td>01.01.1907</td>
            <td>морковка</td>
          </tr>
          <tr>
            <td>2</td>
            <td>2</td>
            <td>
              <div>
                <img
                  src="public/user-placeholder.png"
                  alt="./user-placeholder.png"
                />
              </div>
            </td>
            <td>Серёжа2</td>
            <td>01.01.1907</td>
            <td>морковка</td>
          </tr>
        </tbody>
      </table>
    </main>
  );
};

export default Main;
