import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import Index from "../pages/Index";
import Show from "../pages/Show";

export default function Main() {
  const [cheese, setCheese] = useState(null);
  const URL = "https://ga-homework-cheese-app-api.herokuapp.com/cheese/";

  const getCheese = async () =>
    setCheese(await fetch(URL).then((res) => res.json()));

  const createCheese = async (cheese) => {
    await fetch(URL, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cheese),
    });
    getCheese();
  };

  const updateCheese = async (cheese, id) => {
    await fetch(URL + id, {
      method: "put",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cheese),
    });
    // update list of people
    getCheese();
  };

  const deleteCheese = async (id) => {
    await fetch(URL + id, {
      method: "delete",
    });
    getCheese();
  };

  useEffect(() => getCheese(), []);

  return (
    <main>
      <Switch>
        <Route path="/" exact>
          <Index cheese={cheese} createCheese={createCheese} />
        </Route>
        <Route
          path="/cheese/:id"
          render={(rp) => (
            <Show
              {...rp}
              cheese={cheese}
              updateCheese={updateCheese}
              deleteCheese={deleteCheese}
            />
          )}
        />
      </Switch>
    </main>
  );
}
