import Container from '../components/Container/Container'
import Home from '../components/Home/Home'

const Index = () => {
  return (
    <div>

<style jsx global>{`
            @import url(//db.onlinewebfonts.com/c/6ab539c6fc2b21ff0b149b3d06d7f97c?family=Minecraft);

            .title {
                font-size: 40px;
                color: #ffffff;
                padding: 1rem 0 18px 0;
              }
              
              .paragraph {
                font-size: 21px;
                color: #666666;
                padding: 0 0 42px 0;
              }
              
              .buttons-div {
                width: 100%;
                height: 50px;
                display: flex;
              }
              
              .button {
                height: 100%;
                width: 50%;
                font-family: "Minecraft";
                font-size: 22px;
                outline: none;
                cursor: pointer;
              }
              
              .button1 {
                margin-right: 8px;
                background: #356abc;
                color: white;
                border: 2px solid transparent;
              }
              .button2 {
                margin-left: 8px;
                border: 2px solid #356abc;
                background: transparent;
                color: #356abc;
              }
              
              @media screen and (min-width: 768px) {
                .title {
                  font-size: 64px;
                }
                .paragraph {
                  font-size: 32px;
                }
                .buttons-div {
                  height: 72px;
                }
              }
            `}</style>

      <Container>
        <Home />
      </Container>
    </div>
  );
};

export default Index;
