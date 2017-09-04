import React from 'react'
import styled from 'styled-components'
import { BenchMarkItem } from './BenchmarkItem'
import { titleStyle } from '../styles/bar'
import { hemelblauw } from '../colors'
import { Media, MediaText, MediaFigure } from '../styles/media'
import { ChevronRight } from '../svg/ChevronRight'

const Title = styled.h2`
	${titleStyle};
	margin: 0 1px 0 2px;
	padding: 1em 1rem 1em 2em;
	background: ${hemelblauw.darkest};
`
const BenchmarkOverviewWrapper = styled.div`
	display: flex;
	flex-direction: row;
	align-items: stretch;
`

const TotalScore = () => {
	return <BenchMarkItem score={6.3} text="Live score" />
}

const Arrow = styled(ChevronRight)`
	fill: ${hemelblauw.lighter};
	width: 1.2rem;
	height: 1.7rem;
	margin: -0.5rem 0 -0.5rem 0.5rem;
`

export const BenchmarkOverview = () => {
	return (
		<BenchmarkOverviewWrapper>
			<TotalScore />

			<Title>
				<Media>
					<MediaText>Benchmarks</MediaText>
					<MediaFigure>
						<Arrow />
					</MediaFigure>
				</Media>
			</Title>

			<BenchMarkItem
				score={6.8}
				text="Synoniemen rechtsvormen aangepast"
				date="6 mar 2017 16:23"
			/>

			<BenchMarkItem
				score={6.2}
				text="Synoniemen rechtsvormen toegevoegd"
				date="5 mar 2017 12:44"
				active
			/>
			<BenchMarkItem
				score={5.3}
				text="metadata starten aangepast"
				date="4 mar 2017 10:36"
			/>
		</BenchmarkOverviewWrapper>
	)
}
