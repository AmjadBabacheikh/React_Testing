import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
//setupTests is executing in first by jest before other files
//shallow is a function that return an instance of the component without his children
Enzyme.configure({ adapter: new Adapter() });
