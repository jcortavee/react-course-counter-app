import React from 'react';
import { render } from "@testing-library/react";
import PrimeraApp from "../PrimeraApp";
import { shallow } from 'enzyme';

describe('Test in PrimeraApp', () => {

    // test('should show the message Hi, We are Paramore', () => {
    //    const greeting = 'Hi, We are Paramore';
    //    const wrapper = render(<PrimeraApp greeting={greeting} />);
    
    //    expect(wrapper.getByText(greeting)).toBeInTheDocument();
    // });
    
    test('should show PrimeraApp', () => {
        const greeting = 'Hi, We are Paramore';
        const wrapper = shallow(<PrimeraApp greeting={greeting} />);
        
        expect(wrapper).toMatchSnapshot();
    })
    
    test('should show the subtitle sent in props', () => {
        const greeting = 'Hi, We are Paramore';
        const subtitle = 'Subtitle';
        const wrapper = shallow(<PrimeraApp greeting={greeting} subtitle={subtitle} />);
        
        const pText = wrapper.find('p').text();

        expect(pText).toBe(subtitle);
    })
    
    
    

});