import Container from "../components/Container/Container";
import Home from "../components/Home/Home";
import ApiProvider from "../context/ApiContext";

const Index = () => {
  return (
    <ApiProvider>
      <div>
        <Container>
          <Home />
        </Container>
      </div>
    </ApiProvider>
  );
};

export default Index;
