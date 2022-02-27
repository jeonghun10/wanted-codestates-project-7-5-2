import "./App.css";
import ImageView from "./component/ImageView";
import ImageSelector from "./component/ImageSelector";
import { useState } from "react";
import ImageDraw from "./component/ImageDraw";
import NameList from "./component/NameList";

function App() {
  const [userSelect, setUserSelect] = useState([]);

  return (
    <div>
      <ImageView
        src="https://sun-learning-ff8.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F451a2619-a21b-462d-bb59-a50196e3057a%2Ffashion-unsplash.jpg?table=block&id=efd09440-86df-4dcc-ae21-29097de2bc9b&spaceId=06605955-0fd9-4614-ba9a-0812be412dbe&width=2000&userId=&cache=v2"
        width={500}
        height={800}
      ></ImageView>
      <ImageSelector
        width={500}
        height={800}
        setUserSelect={setUserSelect}
        userSelect={userSelect}
      ></ImageSelector>
      {userSelect.map((el) => {
        return <ImageDraw width={500} height={800} data={el} />;
      })}

      {userSelect.length === 0 ? null : (
        <ul
          style={{
            position: "absolute",
            left: "0",
            top: "0",
            listStyle: "none",
            zIndex: "10",
            padding: "10px 10px",
            backgroundColor: "white",
          }}
        >
          {userSelect.map((el, index) => {
            return (
              <NameList
                key={index}
                data={el}
                userSelect={userSelect}
                setUserSelect={setUserSelect}
              />
            );
          })}
        </ul>
      )}
    </div>
  );
}

export default App;
