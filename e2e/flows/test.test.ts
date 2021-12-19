describe('a', ()=>{
	beforeAll(async ()=>{
		await page.goto('http://localhost:3000')
	})
	test('a', async () =>{
		expect(await page.$('#root')).toBeDefined();
	})
})
