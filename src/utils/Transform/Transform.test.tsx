import { arrayReplaceItem, tableTransformer  } from './'

describe('Transform utils', () => {
    it('arrayReplaceItem() replaces array value immutably', () => {
      const arr = ['one', 'two', 'three', 'four']
      const predicate = (stringVal: string) => stringVal === 'two'
      const replacement = 'Zwie'

      const newArray = arrayReplaceItem(arr, predicate, replacement)
      expect(newArray[1]).toBe(replacement)
    })

    it('tableTransformer() replaces array value immutably', () => {
      const tableFixture: any = {
        tableHead: [
        {
          name: 'first_name',
          label:'First name'
        },
        {
          name: 'last_name',
          label:'Last name'
        },
        {
          name: 'gender',
          label:'Gender'
        },
        {
          name: 'city',
          label:'City'
        },
        {
          name: 'car_model',
          label:'Car model'
        },
        {
          name: 'car_make',
          label:'Car make'
        },
        {
          name: 'credit_card',
          label:'Credit card'
        },
        {
          name: 'currency',
          label:'Currency'
        }],
        tableBody: [
          {"id":1,"first_name":"Chilton","last_name":"Supple","gender":"Male","city":"Baunu-Timbangan","car_model":"FX","car_make":"Infiniti","credit_card":"jcb","currency":"PHP"},
          {"id":2,"first_name":"Gray","last_name":"Hoyland","gender":"Male","city":"Trollhättan","car_model":"Bonneville","car_make":"Pontiac","credit_card":"jcb","currency":"SEK"},
          {"id":3,"first_name":"Elisabet","last_name":"Curl","gender":"Female","city":"Chardonnière","car_model":"Bronco II","car_make":"Ford","credit_card":"jcb","currency":"HTG"},
          {"id":4,"first_name":"Chlo","last_name":"Rodway","gender":"Female","city":"Fushui","car_model":"Town Car","car_make":"Lincoln","credit_card":"mastercard","currency":"CNY"}
        ]
      }

      const dictionariesFixture: any = [
        {
          id: '9876',
          name: 'Something',
          mappings: [
            {
              id: 'abc123',
              field: 'Pants',
              from: 'Briefs',
              to: 'Boxers',
            },
            {
              id: 'def456',
              field: 'Car model',
              from: 'FX',
              to: 'Ford',
            }
          ],
          selected: true
        },
        {
          id: '5477',
          name: 'People',
          mappings: [
            'abcdd3',
            'refaa6',
            'refw7'
          ],
          selected: false
        }
      ]

      const { tableBody } = tableTransformer(tableFixture, dictionariesFixture)
      expect(tableBody[0].car_model).toBe('Ford')
    })
})
