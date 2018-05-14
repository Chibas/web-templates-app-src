export class DataService {

	static instance; // realisation of singleton

	constructor() {
		if (this.instance) {
			return this.instance;
		}

		this.instance = this;
		this.data = [
			{
				id: 1,
				name: 'One',
				template: `
          <div class='template'>
            <div class='editable'>
              One
            </div>
            <div class='container'>
                <div class='editable'>
                Two
              </div>
              <div class='editable'>
                Three
              </div>
            </div>
          </div>`,
				modified: 1516008350380
			},
			{
				id: 2,
				name: 'Two',
				template: `
          <div class='template'>
            <div class='container'>
                <div class='editable'>
                One
              </div>
              <div class='editable'>
                Two
              </div>
              <div class='editable'>
                Three
              </div>
            </div>
            <div class='editable'>
              Four
            </div>
          </div>`,
				modified: 1516008489616
			},
			{
				id: 3,
				name: 'Three',
				template: `
          <div class='template'>
            <div class='editable'>
              one
            </div>
            <div class='editable'>
              two
            </div>
            <div class='editable'>
              three
            </div>
          </div>`,
				modified: 1516008564742
			}
		];
	}

	getList() {
		return this.data;
	}

	getItem(id) {
		return this.data.filter(item => {
			return item.id === id;
		})
	}

	editItem(item, id) {
		this.data = this.data.map(el => {
			if (el.id === id) {
				return el = Object.assign({}, item);
			}
			return el;
		});
	}
}