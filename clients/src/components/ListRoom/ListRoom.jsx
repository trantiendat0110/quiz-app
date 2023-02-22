import React, { useContext } from "react";
import { Context } from "../../global/Context";
import Room from "./Room";
export default function ListRoom() {
  const roomData = useContext(Context);
  const changeUserChat = (userId, roomId) => {
    if (userId) {
    }
    if (roomId) {
    }
  };
  const list = roomData.listRoomData;
  return (
    <div className="flex-1 h-1/2 ">
      <ul className="flex flex-col overflow-y-auto listUser">
        <li>
          {list.length < 1 ? (
            <h1 className="text-center font-medium text-xl">
              No group current !
            </h1>
          ) : (
            list.map((item) => {
              return (
                <Room
                  changeUserChat={changeUserChat}
                  key={item.id}
                  data={item}
                ></Room>
              );
            })
          )}
        </li>
      </ul>
    </div>
  );
}
