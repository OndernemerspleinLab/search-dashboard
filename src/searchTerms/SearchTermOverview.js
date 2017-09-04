import React from 'react'
import { SearchTermConnected } from './SearchTerm'
import { AddButtonBlock } from '../buttons/AddButton'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { searchTermListConnector } from '../connectors/searchTermConnectors'
import { BarBackground, titleStyle } from '../styles/bar'

const Title = styled.h2`
	${titleStyle};
	margin: 0 0 1px 0;
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
			<BarBackground>
				<Title>Zoektermen</Title>
			</BarBackground>
			<SearchTermListConnected />
			<BarBackground>
				<AddButtonBlock>Zoekterm toevoegen</AddButtonBlock>
			</BarBackground>
		</div>
	)
}
