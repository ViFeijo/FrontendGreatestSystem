export function Header() {
  return (
    <div className="mx-[1em] my-[0.5em] flex justify-between">
      <div className="">
        <h1 className="text-2xl font-bold text-orange-800">Greatest System</h1>
      </div>
      <div className="center--side">
        <button className="text-2xl font-bold text-800">Agenda</button>
      </div>
      <div className="flex distance--between--right--side gap-4">
        <div className="text--right--side">
          <p>nome nome</p>
          <p>cargo dele</p>
        </div>
        <img src="path/to/image.jpg" alt="foto perfil" />
      </div>
    </div>
  );
}
