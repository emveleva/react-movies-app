import * as AuthContext from '../../contexts/AuthContext'
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Movie from './Movie';

configure({adapter: new Adapter()});
describe('Movie Template Component', () => {
      it('Should display title', () => {
            const contextValue = { user: "test"};
            jest.spyOn(AuthContext, 'useAuth')
			.mockImplementation(() => contextValue);
	const wrapper = shallow(<Movie title="Batman"/>);
      
              expect(wrapper.find('h3').text()).toBe('Batman');
          });
      });
