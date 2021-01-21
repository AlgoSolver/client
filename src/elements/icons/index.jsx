import styled from "styled-components";
import * as Vectors from "../../assets/icons";
import { useRef, useState, useEffect } from "react";
import { TextInput } from "../../components/form";

import { Search } from "../../assets/icons";
const IconContainer = styled.div`
  .icons {
    margin: 0;
    height: 100%;
    &__wrapper {
      max-width: 100%;
      padding: 2rem;
    }
    &__search {
      margin-top: 2rem;
      box-shadow: ${({theme})=>theme.shadow2};
      padding:2rem;
      text-align: center;
      background:#fff;
      border-radius: 10px;
    }
    &__svg {
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-start;
      align-items: center;
      &--icon {
      	max-width: calc(100% / 4 - 2rem);
        flex: calc(100% / 3 - 4rem);
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        margin: 1rem;
        background:#fff;
        border-radius: 10px;
        padding: 2rem;
        box-shadow: ${({theme})=>theme.shadow2};
        transition: all 0.3s;

        &:hover {
          transform: translateY(-2px);
        }
        h1 {
          &::selection {
            background: red;
            color: #fff;
          }
          font-size: 1.6rem;
          margin: 2rem 0;
        }
      }
      svg {
        width: 3rem;
        height: 3rem;
      }
    }
  }
`;
const Icons = () => {
  const inputRef = useRef(null);
  const [keyword, setKeyword] = useState("");
  const [searchedIcons, setSearchedIcons] = useState([]);
  const [icons, setIcons] = useState([
    ...Object.keys(Vectors).map((key) => {
      return { name: key, svg: Vectors[key] };
    }),
  ]);
  useEffect(() => {
    setIcons((X) =>
      X.sort((a, b) => {
        let textA = a.name.toUpperCase();
        let textB = b.name.toUpperCase();
        return textA < textB ? -1 : textA > textB ? 1 : 0;
      })
    );
    setSearchedIcons(searchedIcons);
  }, []);
  useEffect(() => {
    if(! (inputRef?.current))return;
    const timer = setTimeout(() => {
      if (keyword === inputRef.current.value) {
        setSearchedIcons(
          icons.filter((item) =>
            item.name.toUpperCase().includes(keyword.toUpperCase())
          )
        );
      }
          }, 400);
  

    return () => clearTimeout(timer);
  }, [keyword]);
  return (
    <IconContainer>
      <div className="icons">
        <div className="icons__wrapper">
          <div className="icons__search">
            <div className="form__unit">
              <TextInput
                type="text"
                id="iconed"
                register={inputRef}
                icon={Search}
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                className="form__input iconed"
              />
            </div>
          </div>

          <div className="icons__svg">
            {searchedIcons.map((item) => (
              <div className="icons__svg--icon">
                {item.svg("ahmed")}
                <h1>{item.name}</h1>
              </div>
            ))}
          </div>
        </div>
      </div>
    </IconContainer>
  );
};
export default Icons;
