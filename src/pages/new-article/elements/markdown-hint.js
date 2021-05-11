import styled from "styled-components";
import { Divider } from "../../../components/divider/";
import Text from "../../../components/Text/";

const HintContainer = styled.div`
  margin: 0 1rem;
  margin-bottom: 4rem;
  .hint {
    &__board {
      min-width: 30rem;
      background: ${({ theme }) => theme.colors.light[4]};
      box-shadow: ${({ theme }) => theme.elevation[3].shadow};
      border-radius: 1.5rem;
      padding: 1.5rem;
      color: ${({ theme }) => theme.colors.dark[1]};
    }
    &__row {
      display: flex;
      justify-content: space-between;
      margin: 0.4rem 0;
      font-size: 1.4rem;
    }
  }
`;

const Hint = () => {
  return (
    <HintContainer>
      <Text center type="h4" bold>
        Markedown nutshell
      </Text>
      <div className="hint__board">
        <div className="hint__row">
          <div className="hint__column"># Header</div>
          <div className="hint__column2">H1 Header</div>
        </div>
        <div className="hint__row">
          <div className="hint__column">...</div>
          <div className="hint__column2">...</div>
        </div>
        <div className="hint__row">
          <div className="hint__column">###### Header </div>
          <div className="hint__column2">H6 Header</div>
        </div>
        <Divider mg="1rem" />
        <div className="hint__row">
          <div className="hint__column">*italics* or _italics_</div>
          <div className="hint__column2">
            <i>italics</i>
          </div>
        </div>
        <Divider mg="1rem" />
        <div className="hint__row">
          <div className="hint__column">**bold**</div>
          <div className="hint__column2">
            <strong>Bold</strong>
          </div>
        </div>
        <Divider mg="1rem" />
        <div className="hint__row">
          <div className="hint__column">[Link](https://...) </div>
          <div className="hint__column2">Link</div>
        </div>
        <Divider mg="1rem" />
        <div className="hint__row">
          <div className="hint__column">![image_name](https://...) </div>
          <div className="hint__column2">Image</div>
        </div>
        <Divider mg="1rem" />
        <div className="hint__row">
          <div className="hint__column">
            * item 1 <br />* item 2
          </div>
          <div className="hint__column2">
            <ul>
              <li>item 1</li>
              <li>item 2</li>
            </ul>
          </div>
        </div>
        <Divider mg="1rem" />
        <div className="hint__row">
          <div className="hint__column">
            1. item 1 <br />
            2. item 2
          </div>
          <div className="hint__column2">
            1. item 1 <br />
            2. item 2
          </div>
        </div>
        <Divider mg="1rem" />
        <div className="hint__row">
          <div className="hint__column"> > quoted text </div>
          <div className="hint__column2">quoted text</div>
        </div>
        <Divider mg="1rem" />
        <div className="hint__row">
          <div className="hint__column">`inline code` </div>
          <div className="hint__column2">inline code</div>
        </div>{" "}
        <Divider mg="1rem" />
        <div className="hint__row">
          <div className="hint__column">
            ```
            <br />
            code block
            <br />
            ```
          </div>
          <div className="hint__column2">code block</div>
        </div>
      </div>
    </HintContainer>
  );
};

export default Hint;
