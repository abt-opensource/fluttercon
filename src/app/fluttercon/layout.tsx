import IconList from "./gallery";
import Sbar from "./sbar";
const layout = () => {
  return (
    <div>
      <div className="flex flex-row justify-end ">
        <div>
          <Sbar />
        </div>

        <main className=" w-full bg-dark">
          <IconList />
        </main>
      </div>
    </div>
  );
};

export default layout;
