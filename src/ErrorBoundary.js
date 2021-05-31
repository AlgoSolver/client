import { Component } from "react";
import Messgae from "./components/message";
import Text from "./components/Text";
import { Link } from "react-router-dom";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    //logErrorToMyService(error, errorInfo);
    console.error(error, errorInfo);
    console.log(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <div className="wrapper">
          <Messgae
            type="red"
            subTitle="An Internal Error, Please try again later."
          />
          <Text color="blue">
            <Link className="link" to="/">
              Home Page
            </Link>
          </Text>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
