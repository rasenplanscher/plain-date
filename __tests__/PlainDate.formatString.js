const it = require('ava')

const PlainDate = require('../index')


const date = new PlainDate(2018, 7, 8)

it('returns a string representation according to the given format', t => {
	const format1 = 'YYMMDD'
	const format2 = 'YYYYMMDD'
	const format3 = 'DD.MM.YYYY'
	const format4 = 'MM/DD/YY'

	t.is(date.formatString(format1), '180708')
	t.is(date.formatString(format2), '20180708')
	t.is(date.formatString(format3), '08.07.2018')
	t.is(date.formatString(format4), '07/08/18')
})

it('defaults to ISO format', t => {
	t.is(date.formatString(), '2018-07-08')
})