const axios = require('axios');
const productsAPIReqs = require('./qaHelpers.js');
const fetchQuestions = productsAPIReqs.fetchQuestions;

jest.mock('axios');

describe('Questions & Answers API client-side calls', () => {
  test('Should get ONE specific products questions', (done) => {
    // create a mock response that we know we SHOULD receive from the server - so that in case the server is down our tests wouldn't fail
    axios.get.mockImplementationOnce(() => Promise.resolve({
      data: {
        'question': 114290,
        'page': 1,
        'count': '10',
        'results': [{}],
      },
    }));

    fetchQuestions()
        .then((responseObj) => {
          // body info/structure - check couple key points, like question num & results
          expect(responseObj.question).toBe(114290);
          // ensure results returned isn't empty - this is where both q&a's are
          expect(responseObj.results.length).toBeGreaterThan(0);
          // ensure request is made with proper URI/params (if any params)
          expect(axios.get).toHaveBeenCalledWith(
              '/qa/questions/18078',
          );
          done();
        });
  });
});
