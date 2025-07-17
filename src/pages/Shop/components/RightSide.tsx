import CardItem from "./CardItem";
import { data } from "./mockData";
import React from "react";

function RightSide() {
  return (
    <div
      className="flex flex-col gap-12 absolute right-0 w-[47%] h-auto mt-15 mb-10
    max-md:w-[100%] max-md:relative"
    >
      {data.map((item, index) => {
        return (
          <React.Fragment key={`el-${index}`}>
            <CardItem
              id={item.id}
              brief={item.brief}
              image={item.image}
              logo={item.logo}
              oldPrice={item.oldPrice}
              price={item.price}
              title={item.title}
              details={item.details}
            />
          </React.Fragment>
        );
      })}
    </div>
  );
}

export default RightSide;
