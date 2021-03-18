import { shallow } from 'enzyme';
import CounterApp from '../CounterApp';

describe('CounterApp Test', () => {
    const wrapper = shallow(<CounterApp />);

    beforeEach(() => {
        wrapper.find('button').at(2).simulate('click');
    });

    test('should show the component', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('should show 100', () => {
        const defaultNumber = 100;
        const wrapper = shallow(<CounterApp value={defaultNumber} />);

        expect(parseInt(wrapper.find('h2').text())).toBe(defaultNumber);
    })

    test('should increment the value with button', () => {
        wrapper.find('button').at(0).simulate('click');
        const text = parseInt(wrapper.find('h2').text());
        
        expect(text).toBe(11);
    });
    
    test('should decrement the value with button', () => {
        wrapper.find('button').at(1).simulate('click');
        const value = wrapper.find('h2').text();
        
        expect(value).toBe('9');
    })
    
    
    
    
});