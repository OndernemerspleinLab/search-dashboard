import React from 'react'
import { SearchTermConnected } from './SearchTerm'
import { AddButtonBlock } from '../buttons/AddButton'
import styled from 'styled-components'
import { hemelblauw } from '../colors'
import { connect } from 'react-redux'
import { searchTermListConnector } from '../connectors/searchTermConnectors'

const Background = styled.div`background: ${hemelblauw.darkest};`
const Title = styled.h2`
	color: inherit;
	margin: 0 0 1px 0;
	padding: 0.9rem 1rem;
	text-align: center;
	font-size: 1.2rem;
	line-height: 1.2;
`
const SearchTermList = ({ searchTermList }) => {
	return (
		<div>
			{searchTermList.map(searchTerm => (
				<SearchTermConnected {...searchTerm} key={searchTerm.id} />
			))}
		</div>
	)
}

const SearchTermListConnected = connect(searchTermListConnector)(SearchTermList)

export const SearchTermOverview = () => {
	return (
		<div>
			<Background>
				<Title>Zoektermen</Title>
			</Background>
			<SearchTermListConnected />
			<Background>
				<AddButtonBlock>Zoekterm toevoegen</AddButtonBlock>
			</Background>
		</div>
	)
}
