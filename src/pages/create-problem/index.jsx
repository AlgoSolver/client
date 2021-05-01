import styled from "styled-components";
import { Link, useLocation, Route, Switch, Redirect } from "react-router-dom";
import Text from "../../components/Text/";
import { TextInput, TextArea, Select, Draft } from "../../components/form/";
import light from "../../assets/images/light.png";
import { Divider } from "../../components/divider/";
import Button from "../../components/button/";
import { useMediaQuery } from "react-responsive";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const CreateProblemContainer = styled.div`
  padding: 3rem 0;

  border-top: 1px solid ${({ theme }) => theme.colors.light[0]};
  min-height: 100vh;
  .wrapper {
    display: flex;
    flex-direction: column;
    height: 100%;
  }
`;

const StepNavContainer = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .stepper {
    &__bar {
      background: ${({ theme }) => theme.colors.gray[3]};
      height: 0.2rem;
      position: absolute;
      width: 100%;
      .child {
        width: ${({ progress }) => progress + "%"};
        transition: width 0.3s cubic-bezier(0.65, 0, 0.35, 1);
        background: ${({ theme }) => theme.colors.primary[1]};
        height: 100%;
      }
    }
  }
`;

const StepItem = styled.div`
  z-index: 3;
  .stepper {
    &__item {
      background: ${({ theme }) => theme.colors.light[0]};
      cursor: pointer;
      display: flex;
      align-items: center;
      padding: 1rem;
      > span {
        font-size: 1.7rem;
        font-weight: 400;
        transition: color 0.3s ease;
        color: ${({ theme, progress, value }) =>
          progress === value ? theme.colors.dark[0] : theme.colors.dark[3]};
      }
    }
    &__count {
      margin-right: 1rem;
      height: 2.8rem;
      width: 2.8rem;
      border-radius: 1.4rem;
      border: 2px solid
        ${({ theme, progress, value }) =>
          progress >= value ? theme.colors.primary[1] : theme.colors.light[1]};
      display: flex;
      align-items: center;
      justify-content: center;
      background: ${({ theme, progress, value }) =>
        progress >= value ? theme.colors.primary[1] : theme.colors.light[4]};
      transition: background 0.3s ease, color 0.3s ease, border 0.3s ease;
      transition-delay: ${({ progress, value }) =>
        value >= progress ? ".3s" : "0s"};
      span {
        font-size: 1.5rem;
        line-height: 1;
        transition: color 0.3s ease;
        transition-delay: ${({ progress, value }) =>
          value >= progress ? ".3s" : "0s"};
        color: ${({ theme, progress, value }) =>
          progress >= value ? theme.colors.light[4] : theme.colors.dark[2]};
      }
    }
  }
`;
const StepNav = () => {
  const location = useLocation();
  let progress = 0;
  if (location?.pathname === "/create-problem/test-cases") progress = 50;
  else if (location?.pathname === "/create-problem/solution") progress = 100;
  return (
    <StepNavContainer progress={progress} className="stepper">
      <div className="stepper__bar">
        <div className="child"></div>
      </div>
      <StepItem progress={progress} value={0}>
        <Link to="/create-problem/question">
          <div className="stepper__item stepper__item1">
            <div className="stepper__count">
              <span>1</span>
            </div>
            <span>Question</span>
          </div>
        </Link>
      </StepItem>
      <StepItem progress={progress} value={50}>
        <Link to="/create-problem/test-cases">
          <div className="stepper__item stepper__item1">
            <div className="stepper__count">
              <span>2</span>
            </div>
            <span>Test Cases</span>
          </div>
        </Link>
      </StepItem>
      <StepItem progress={progress} value={100}>
        <Link to="/create-problem/solution">
          <div className="stepper__item stepper__item1">
            <div className="stepper__count">
              <span>3</span>
            </div>
            <span>Solution</span>
          </div>
        </Link>
      </StepItem>
    </StepNavContainer>
  );
};

const FieldContainer = styled.div`
  height: 100%;
  flex: 1;
  .container {
    &__footer {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 2rem;
    }
    &__body {
      padding: 2rem;
      display: flex;
      height: 100%;
    }
    &__content {
      flex: 1;
      margin-right: 1rem;
    }
    &__sample {
      flex: 0 1 40rem;
      background: ${({ theme }) => theme.colors.light[0]};
      padding: 2rem;
    }
  }
  .form {
    &__inputs {
      max-width: 40rem;
    }
    &__body {
      margin-top: 2rem;
    }
  }
  @media (${({ theme }) => theme.breakpoints.tabPort}) {
    .container {
      &__body {
        flex-direction: column-reverse;
      }
    }
  }
`;

const SampleContainer = styled(motion.div)`
  flex: 0 1 40rem;

  padding: 2rem;
  .sample {
    &__modal {
      text-align: center;
    }
    &__light {
      cursor: pointer;
      width: 5rem;
      height: 5rem;
      background: ${({ theme }) => theme.colors.light[4]};
      padding: 1.5rem;
      border-radius: 5rem;
      box-shadow: ${({ theme }) => theme.elevation[3].shadow};
      img {
        width: 100%;
      }
    }
    &__container {
      margin-top: 5rem;
      background: ${({ theme }) => theme.colors.light[4]};
      box-shadow: ${({ theme }) => theme.elevation[3].shadow};
      position: relative;
      padding: 5rem 2rem 2rem;
      border-radius: 1rem;
    }
    &__icon {
      position: absolute;
      top: 0%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 10rem;
      height: 10rem;
      background: ${({ theme }) => theme.colors.light[4]};
      padding: 1.5rem;
      border-radius: 5rem;
      box-shadow: ${({ theme }) => theme.elevation[3].shadow};
      img {
        width: 100%;
      }
    }
    &__list {
      list-style-type: none;
    }
    &__item {
      .main {
        font-size: 1.6rem;
        text-transform: capoitalize;
        display: block;
      }
    }
  }
  @media (${({ theme }) => theme.breakpoints.tabPort}) {
    flex: auto;
  }
`;
const SampleModel = ({ children }) => {
  const [show, setShow] = useState(false);
  return (
    <div className="sample__modal">
      <div className="center">
        <Button type="blue" onClick={() => setShow((e) => !e)}>
          Show Hint
        </Button>
      </div>
      <AnimatePresence>
        {show && (
          <motion.div
            initial={{
              y: -20,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            exit={{ y: -20, opacity: 0 }}
          >
            <div className="sample__container">
              <div className="sample__icon">
                <img src={light} alt="Illustration" />
              </div>
              <Text type="h3" bold layer={1} center>
                Hint
              </Text>
              <div className="sample__body">{children}</div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
const Sample = ({ children }) => {
  const isTabPort = useMediaQuery({ query: "(max-width: 900px)" });
  return (
    <SampleContainer>
      {isTabPort ? (
        <SampleModel>{children}</SampleModel>
      ) : (
        <div className="sample__container">
          <div className="sample__icon">
            <img src={light} alt="Illustration" />
          </div>
          <Text type="h3" bold layer={1} center>
            Hint
          </Text>
          <div className="sample__body">{children}</div>
        </div>
      )}
    </SampleContainer>
  );
};
const trackOptions = [
  {
    value: "algo",
    label: "Algorithms",
  },
  {
    value: "ds",
    label: "Data Structure",
  },
  {
    value: "math",
    label: "Math",
  },
  {
    value: "patterns",
    label: "Pastterns",
  },
];

let titleTimer, trackTimer, quesTimer, testsTimer, soluTimer;

const handleChange = (timer, e, name) => {
  if (timer) {
    clearTimeout(timer);
  }
  timer = setTimeout(() => {
    localStorage.setItem(`create-problem-${name}`, JSON.stringify(e));
  }, 1000);
};

const getValue = (name) => {
  return JSON.parse(localStorage.getItem(`create-problem-${name}`));
};
// const removeAll = ()=>{
//
// }
const QuestinonForm = () => {
  return (
    <form className="form__body">
      <div className="form__inputs">
        <TextInput
          defaultValue={getValue("title")}
          onChange={(e) => handleChange(titleTimer, e.target.value, "title")}
          label="Title *"
          placeholder="Name your problem."
        />
        <Select
          defaultValue={getValue("track")}
          onChange={(e) => handleChange(trackTimer, e.target.value, "track")}
          options={trackOptions}
          label="Select a track *"
          placeholder="Name your problem."
        />
      </div>
      <Draft
        defaultValue={getValue("question")}
        onChange={(e) => handleChange(quesTimer, e, "question")}
        label="Problem Description"
      />
    </form>
  );
};
const TestCasesForm = () => {
  return (
    <form className="form__body">
      <TextArea
        big
        label="Test Cases*"
        placeholder="input your test cases here"
        defaultValue={getValue("test-cases")}
        onChange={(e) => handleChange(testsTimer, e.target.value, "test-cases")}
      />
    </form>
  );
};

const SolutionForm = () => {
  return (
    <form className="form__body">
      <Draft
        label="Write Your Solution"
        defaultValue={getValue("solution")}
        onChange={(e) => handleChange(soluTimer, e, "solution")}
      />
    </form>
  );
};

const Questinon = () => {
  return (
    <FieldContainer>
      <div className="container__body">
        <div className="container__content">
          <div className="form">
            <Text type="h2" bold layer={1}>
              Descripe Your Problem.
            </Text>
            <Text type="p" layer={2}>
              Illustrate your problem and write a good explanation
            </Text>
            <QuestinonForm />
          </div>
        </div>
        <Sample>
          <ul className="sample__list">
            <li className="sample__item">
              <Text type="p">1- Create a descriptive, and specific title</Text>
              <Text type="p" layer={2}>
                <Text type="span" color="red">
                  Don't Use:{" "}
                </Text>{" "}
                Find middle
              </Text>
              <Text type="p" layer={2}>
                <Text type="span" color="green">
                  Use:{" "}
                </Text>{" "}
                Find the middle element of the array
              </Text>
            </li>
            <Divider />
            <li className="sample__item">
              <Text type="p">2- Select a track for your problem</Text>
            </li>
            <Divider />
            <li className="sample__item">
              <Text type="p">3- Writting the problem, e.g:</Text>
              <Text type="p" mg="1rem 0" layer={2}>
                Given an integer x, return true if x is palindrome integer.
              </Text>
              <Text type="p" mg="1rem 0" layer={2}>
                An integer is a palindrome when it reads the same backward as
                forward. For example, 121 is palindrome while 123 is not.
              </Text>
              <Text type="h4" mg="1rem 0">
                Example:
              </Text>
              <Text type="p" layer={2}>
                Input: x = 121
              </Text>
              <Text type="p" layer={2}>
                Output: true
              </Text>
            </li>
          </ul>
        </Sample>
      </div>
    </FieldContainer>
  );
};
const TestCases = () => {
  return (
    <FieldContainer>
      <div className="container__body">
        <div className="container__content">
          <div className="form">
            <Text type="h2" bold layer={1}>
              Create test cases.
            </Text>
            <Text type="p" layer={2}>
              Illustrate your input and your output.
            </Text>
            <TestCasesForm />
          </div>
        </div>
        <Sample>
          <Text type="p">
            input:{" "}
            <Text size="1.6rem" type="span" layer={2}>
              nums = [2, 7, 11, 15], target = 9
            </Text>
          </Text>
          <Text type="p">
            Output:{" "}
            <Text size="1.6rem" type="span" layer={2}>
              [0, 1]
            </Text>
          </Text>
          <Text type="p" mg="1rem 0 0">
            input:{" "}
            <Text size="1.6rem" type="span" layer={2}>
              nums=[-3, 4, 3, 90], target = 0
            </Text>
          </Text>
          <Text type="p">
            Output:{" "}
            <Text size="1.6rem" type="span" layer={2}>
              [0, 2]
            </Text>
          </Text>
        </Sample>
      </div>
    </FieldContainer>
  );
};

const Solution = () => {
  return (
    <FieldContainer>
      <div className="container__body">
        <div className="container__content">
          <div className="form">
            <Text type="h2" bold layer={1}>
              Problem Solution.
            </Text>
            <Text type="p" layer={2}>
              Illustrate your problem Solution
            </Text>
            <SolutionForm />
          </div>
        </div>
        <Sample>
          <Text type="p">
            You can share a{" "}
            <Link to="/playground">
              <Button link>Playground</Button>
            </Link>{" "}
            link or write your pseudocode here!
          </Text>
          <Text type="h3" bold>
            Sample
          </Text>
          <Text type="h4" bold>
            Approach 1: Brute Force
          </Text>
          <Text type="p" layer={2}>
            The brute force approach is simple. Loop through each element xx and
            find if there is another value that equals to target - xtarget−x.
          </Text>
          <Text type="pre">
            {`
int gcd (int a, int b) {
 if (b == 0)
	return a;
 else
 return gcd (b, a % b);
}
         		`}
          </Text>
        </Sample>
      </div>
      <div className="container__footer">
        <Button theme="dark" layer={0}>
          Preview
        </Button>
        <Button>Submit</Button>
      </div>
    </FieldContainer>
  );
};

const CreateProblemRoutes = () => {
  return (
    <Switch>
      <Route path="/create-problem/solution">
        <Solution />
      </Route>
      <Route path="/create-problem/test-cases">
        <TestCases />
      </Route>
      <Route path="/create-problem/question">
        <Questinon />
      </Route>
      <Redirect from="*" to="/create-problem/question" />
    </Switch>
  );
};
const CreateProblem = () => {
  return (
    <CreateProblemContainer>
      <div className="wrapper">
        <StepNav />
        <CreateProblemRoutes />
      </div>
    </CreateProblemContainer>
  );
};

export default CreateProblem;
