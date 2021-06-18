const supertest = require('supertest');
const axios = require('axios');
const app = require('../../server/server.js');
const url = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-bld';
const config = require('../../config.js');


jest.mock('axios');
const request = supertest(app);

describe('Questions & Answers Routes', () => {
  test('Should get ONE specific products questions', (done) => {
    // create a mock response that we know we SHOULD receive from the server - so in case server is down our tests won't fail
    axios.mockImplementationOnce(() => Promise.resolve({
      data: {
        'product_id': '18078',
        'results': [
          {
            'question_id': 114290,
            'question_body': 'Can I wash it?',
            'question_date': '2018-02-08T00:00:00.000Z',
            'asker_name': 'cleopatra',
            'question_helpfulness': 191,
            'reported': false,
            'answers': {
              '1444028': {
                'id': 1444028,
                'body': 'Of course, looks even better after',
                'date': '2021-03-11T00:00:00.000Z',
                'answerer_name': 'SomethingCool',
                'helpfulness': 1,
                'photos': [
                  'https://cdn.shopify.com/s/files/1/0606/7869/products/HD510J-DK_6_1024x1024.jpg?v=1545349282',
                ],
              },
              '1991702': {
                'id': 1991702,
                'body': 'Absolutely it looks great',
                'date': '2021-06-15T00:00:00.000Z',
                'answerer_name': 'Johnson',
                'helpfulness': 2,
                'photos': [
                  'https://i.ibb.co/hRWDB9N/Dn-DDress-Up-Drang.png',
                  'https://i.ibb.co/9g0hF63/Thumbnail.png',
                ],
              },
            },
          },
          {
            'question_id': 212438,
            'question_body': 'How many heroes can you fit in this?',
            'question_date': '2021-06-10T00:00:00.000Z',
            'asker_name': 'DestroyerOfWorlds',
            'question_helpfulness': 25,
            'reported': false,
            'answers': {
              '1991344': {
                'id': 1991344,
                'body': 'About 3',
                'date': '2021-06-10T00:00:00.000Z',
                'answerer_name': 'NotDestroyerOfWorlds',
                'helpfulness': 0,
                'photos': [],
              },
              '1991346': {
                'id': 1991346,
                'body': 'I was able to fit 10 in it',
                'date': '2021-06-10T00:00:00.000Z',
                'answerer_name': 'NotDestroyerOfWorlds',
                'helpfulness': 0,
                'photos': [],
              },
              '1991347': {
                'id': 1991347,
                'body': 'The limit is your imagination',
                'date': '2021-06-10T00:00:00.000Z',
                'answerer_name': 'NotDestroyerOfWorlds',
                'helpfulness': 5,
                'photos': [],
              },
              '1991350': {
                'id': 1991350,
                'body': 'Get the XXL it can fit so many',
                'date': '2021-06-10T00:00:00.000Z',
                'answerer_name': 'NotDestroyerOfWorlds',
                'helpfulness': 0,
                'photos': [],
              },
              '1991351': {
                'id': 1991351,
                'body': '10/10 would recommend the XL size',
                'date': '2021-06-10T00:00:00.000Z',
                'answerer_name': 'NotDestroyerOfWorlds',
                'helpfulness': 2,
                'photos': [],
              },
              '1991468': {
                'id': 1991468,
                'body': 'Hello',
                'date': '2021-06-11T00:00:00.000Z',
                'answerer_name': 'NotDestroyerOfWorlds',
                'helpfulness': 0,
                'photos': [],
              },
            },
          },
          {
            'question_id': 183121,
            'question_body': 'Which cow is best?',
            'question_date': '2021-04-27T00:00:00.000Z',
            'asker_name': 'Bessie',
            'question_helpfulness': 12,
            'reported': false,
            'answers': {
              '1719636': {
                'id': 1719636,
                'body': 'Skittles. You know her?',
                'date': '2021-04-27T00:00:00.000Z',
                'answerer_name': 'CowBoyyy',
                'helpfulness': 12,
                'photos': [],
              },
              '1719910': {
                'id': 1719910,
                'body': 'Buttercup',
                'date': '2021-04-30T00:00:00.000Z',
                'answerer_name': 'Buttercup',
                'helpfulness': 0,
                'photos': [],
              },
              '1719911': {
                'id': 1719911,
                'body': 'Daisy',
                'date': '2021-04-30T00:00:00.000Z',
                'answerer_name': 'Daisy',
                'helpfulness': 0,
                'photos': [],
              },
              '1719912': {
                'id': 1719912,
                'body': 'Buttercup2',
                'date': '2021-04-30T00:00:00.000Z',
                'answerer_name': 'Buttercup',
                'helpfulness': 0,
                'photos': [],
              },
              '1719913': {
                'id': 1719913,
                'body': 'Susy',
                'date': '2021-04-30T00:00:00.000Z',
                'answerer_name': 'susy',
                'helpfulness': 0,
                'photos': [],
              },
            },
          },
        ],
      },
    }));

    request.get('/qa/questions/18078')
        .then((response) => {
          // success response code
          expect(response.status).toBe(200);
          // body info/structure
          expect(response.body).toEqual(
              expect.objectContaining({
                'product_id': '18078',
                'results': [
                  {
                    'question_id': 114290,
                    'question_body': 'Can I wash it?',
                    'question_date': '2018-02-08T00:00:00.000Z',
                    'asker_name': 'cleopatra',
                    'question_helpfulness': 191,
                    'reported': false,
                    'answers': {
                      '1444028': {
                        'id': 1444028,
                        'body': 'Of course, looks even better after',
                        'date': '2021-03-11T00:00:00.000Z',
                        'answerer_name': 'SomethingCool',
                        'helpfulness': 1,
                        'photos': [
                          'https://cdn.shopify.com/s/files/1/0606/7869/products/HD510J-DK_6_1024x1024.jpg?v=1545349282',
                        ],
                      },
                      '1991702': {
                        'id': 1991702,
                        'body': 'Absolutely it looks great',
                        'date': '2021-06-15T00:00:00.000Z',
                        'answerer_name': 'Johnson',
                        'helpfulness': 2,
                        'photos': [
                          'https://i.ibb.co/hRWDB9N/Dn-DDress-Up-Drang.png',
                          'https://i.ibb.co/9g0hF63/Thumbnail.png',
                        ],
                      },
                    },
                  },
                  {
                    'question_id': 212438,
                    'question_body': 'How many heroes can you fit in this?',
                    'question_date': '2021-06-10T00:00:00.000Z',
                    'asker_name': 'DestroyerOfWorlds',
                    'question_helpfulness': 25,
                    'reported': false,
                    'answers': {
                      '1991344': {
                        'id': 1991344,
                        'body': 'About 3',
                        'date': '2021-06-10T00:00:00.000Z',
                        'answerer_name': 'NotDestroyerOfWorlds',
                        'helpfulness': 0,
                        'photos': [],
                      },
                      '1991346': {
                        'id': 1991346,
                        'body': 'I was able to fit 10 in it',
                        'date': '2021-06-10T00:00:00.000Z',
                        'answerer_name': 'NotDestroyerOfWorlds',
                        'helpfulness': 0,
                        'photos': [],
                      },
                      '1991347': {
                        'id': 1991347,
                        'body': 'The limit is your imagination',
                        'date': '2021-06-10T00:00:00.000Z',
                        'answerer_name': 'NotDestroyerOfWorlds',
                        'helpfulness': 5,
                        'photos': [],
                      },
                      '1991350': {
                        'id': 1991350,
                        'body': 'Get the XXL it can fit so many',
                        'date': '2021-06-10T00:00:00.000Z',
                        'answerer_name': 'NotDestroyerOfWorlds',
                        'helpfulness': 0,
                        'photos': [],
                      },
                      '1991351': {
                        'id': 1991351,
                        'body': '10/10 would recommend the XL size',
                        'date': '2021-06-10T00:00:00.000Z',
                        'answerer_name': 'NotDestroyerOfWorlds',
                        'helpfulness': 2,
                        'photos': [],
                      },
                      '1991468': {
                        'id': 1991468,
                        'body': 'Hello',
                        'date': '2021-06-11T00:00:00.000Z',
                        'answerer_name': 'NotDestroyerOfWorlds',
                        'helpfulness': 0,
                        'photos': [],
                      },
                    },
                  },
                  {
                    'question_id': 183121,
                    'question_body': 'Which cow is best?',
                    'question_date': '2021-04-27T00:00:00.000Z',
                    'asker_name': 'Bessie',
                    'question_helpfulness': 12,
                    'reported': false,
                    'answers': {
                      '1719636': {
                        'id': 1719636,
                        'body': 'Skittles. You know her?',
                        'date': '2021-04-27T00:00:00.000Z',
                        'answerer_name': 'CowBoyyy',
                        'helpfulness': 12,
                        'photos': [],
                      },
                      '1719910': {
                        'id': 1719910,
                        'body': 'Buttercup',
                        'date': '2021-04-30T00:00:00.000Z',
                        'answerer_name': 'Buttercup',
                        'helpfulness': 0,
                        'photos': [],
                      },
                      '1719911': {
                        'id': 1719911,
                        'body': 'Daisy',
                        'date': '2021-04-30T00:00:00.000Z',
                        'answerer_name': 'Daisy',
                        'helpfulness': 0,
                        'photos': [],
                      },
                      '1719912': {
                        'id': 1719912,
                        'body': 'Buttercup2',
                        'date': '2021-04-30T00:00:00.000Z',
                        'answerer_name': 'Buttercup',
                        'helpfulness': 0,
                        'photos': [],
                      },
                      '1719913': {
                        'id': 1719913,
                        'body': 'Susy',
                        'date': '2021-04-30T00:00:00.000Z',
                        'answerer_name': 'susy',
                        'helpfulness': 0,
                        'photos': [],
                      },
                    },
                  },
                ],
              }),
          );
          // ensure results isn't empty
          expect(response.body.results.length).toBeGreaterThan(0);
          // ensure request is made with headers - API key
          expect(axios).toHaveBeenCalledWith(
              options = {
                method: 'GET',
                // url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-bld/products',
                url: `${url}/qa/questions/?product_id=18078`,
                headers: {
                  'User-Agent': 'request',
                  'Authorization': `${config.TOKEN}`,
                },
                data: undefined,
              },
          );
          done();
        });
  });

  test('Should get answers for one specific question', (done) => {
    // create a mock response that we know we SHOULD receive from the server - so in case server is down our tests won't fail
    axios.mockImplementationOnce(() => Promise.resolve({
      data: {
        'question': '114290',
        'page': 1,
        'count': '10',
        'results': [{}],
      },
    }));

    request.get('/qa/questions/114290/answers')
        .then((response) => {
          // success response code
          expect(response.status).toBe(200);
          // body info/structure
          expect(response.body).toEqual(
              expect.objectContaining({
                'question': '114290',
                'page': 1,
                'count': '10',
                'results': [{}],
              }),
          );
          // ensure results isn't empty
          expect(response.body.results.length).toBeGreaterThan(0);
          // ensure request is made with headers - API key
          expect(axios).toHaveBeenCalledWith(
              options = {
                method: 'GET',
                // url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-bld/products',
                url: `${url}/qa/questions/114290/answers/?count=10`,
                headers: {
                  'User-Agent': 'request',
                  'Authorization': `${config.TOKEN}`,
                },
                data: undefined,
              },
          );
          done();
        });
  });
});
