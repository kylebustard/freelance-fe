import { Component } from '@angular/core';
import { Proposal } from './proposal';

@Component({
	moduleId: module.id,
	selector: 'proposal-list',
	templateUrl:
	'proposal-list.component.html'
})

export class ProposalListComponent {
	proposalOne: Proposal = new Proposal(
	  15,
	  'Acme Company',
	  'http://kylebustard.github.io',
	  'Ruby on Rails',
	  150,
	  120,
	  15,
	  'bustardkyle@gmail.com'
	)
	proposalTwo: Proposal = new Proposal(
	  33,
	  'XYZ Company',
	  'http://kylebustard.github.io',
	  'Ruby on Rails',
	  150,
	  120,
	  15,
	  'bustardkyle@gmail.com'
	)
	proposalThree: Proposal = new Proposal(
	  300,
	  'ABC Company',
	  'http://kylebustard.github.io',
	  'Ruby on Rails',
	  150,
	  120,
	  15,
	  'bustardkyle@gmail.com'
	)

	proposals: Proposal[] = [
    this.proposalOne,
    this.proposalTwo,
    this.proposalThree
	]
}