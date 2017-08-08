import DealTile from '../../src/components/DealTile';
import { mount } from 'enzyme';
import jasmineEnzyme from 'jasmine-enzyme';
import React from 'react';

describe('DealTile displays info', () => {
    let title,
        link_flair,
        created,
        wrapper;

        beforeEach(() => {
          wrapper = mount(
            <DealTile
              id={1}
              title='New Deal on Nike Shoes! Use code "running"'
              link_flair='[Deal/Sale]'
              created='1502176403'
            />
          );
        });

  it('should render an h3 tag', () => {
    expect(wrapper.find('h3')).toBePresent();
    expect(wrapper.find('h3').text()).toBe('New Deal on Nike Shoes! Use code "running"');
  })

  it('should render an h4 tag with the address', () => {
    expect(wrapper.find('h4')).toBePresent();
    expect(wrapper.find('h4').text()).toBe('[Deal/Sale]');
  });
});
