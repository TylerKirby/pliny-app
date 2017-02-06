/**
 * Created by Tyler on 2/6/17.
 */
'use strict';

describe('pliny-app', function() {
  it('should direct `index.html` to `index.html#!/letters', function() {
    browser.get('index.html');
    expect(browser.getCurrentUrl()).toBe('http://localhost:8000/index.html#!/letters');
  })
});