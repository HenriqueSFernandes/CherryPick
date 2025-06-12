export default async function Gradients() {
  return (
    <div className="absolute w-screen h-screen -z-10 overflow-hidden">
      <div
        className="fixed top-0 -right-[250px] w-[500px] h-[500px] rounded-full opacity-70 blur-xl"
        style={{
          background:
            "radial-gradient(circle, hsla(1, 98%, 24%, 0.4), hsla(1, 98%, 24%, 0.0))",
        }}
      ></div>
      <div
        className="fixed -bottom-[250px] -left-[250px] w-[500px] h-[500px] rounded-full opacity-70 blur-xl"
        style={{
          background:
            "radial-gradient(circle, hsla(1, 98%, 24%, 0.4), hsla(1, 98%, 24%, 0.0))",
        }}
      ></div>
    </div>
  );
}
