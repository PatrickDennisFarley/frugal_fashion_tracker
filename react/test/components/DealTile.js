import DealTile from 'components/DealTile';
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
              created='1502237380'
            />
          );
        });

  it('should render an h3 tag', () => {
    expect(wrapper.find('h3')).toBePresent();
    expect(wrapper.find('h3').first().text()).toBe('New Deal on Nike Shoes! Use code "running"');
  })

  it('should render an h4 tag with the link flair', () => {
    expect(wrapper.find('h4')).toBePresent();
    expect(wrapper.find('h4').first().text()).toBe('[Deal/Sale]');
  });
  it('should render an p tag with the created_at', () => {
    expect(wrapper.find('p')).toBePresent();
    expect(wrapper.find('p').last().text()).toBe('Created at: 08-08-2017 20:09:40');
  });
});
