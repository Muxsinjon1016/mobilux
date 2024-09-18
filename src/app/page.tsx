import MainPage from "./(pages)/home";
import CartButton from "@/components/sections/cartButton";


export default function Home() {
  return (
    <div>
      <div className="fixed right-0 top-72 z-50">
        <CartButton />
      </div>
      <MainPage />
    </div>
  );
}
