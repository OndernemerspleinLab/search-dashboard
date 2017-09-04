import React from 'react'
import styled from 'styled-components'
import { titleStyle } from '../styles/bar'
import { ResultLink, ResultTitle } from './ResultLink'

const ResultListWrapper = styled.div`
	flex: auto;
	padding: 0 2rem;
`

const ResultListTitle = styled.h2`
	${titleStyle};
	text-align: left;
	padding-left: 0;
`

export const ResultList = () => {
	return (
		<ResultListWrapper>
			<ResultListTitle>Daadwerkelijke resultaten</ResultListTitle>
			<ResultLink href="https://www.ondernemersplein.nl/regel/rechtsvorm/">
				<ResultTitle>Rechtsvorm</ResultTitle>
			</ResultLink>

			<ResultLink href="https://www.ondernemersplein.nl/ondernemen/bedrijf-organiseren/rechtsvormen/info-en-advies/een-rechtsvorm-kiezen/">
				<ResultTitle>Een rechtsvorm kiezen</ResultTitle>
			</ResultLink>

			<ResultLink href="https://www.ondernemersplein.nl/ondernemen/bedrijf-organiseren/rechtsvorm-wijzigen/">
				<ResultTitle>Rechtsvorm wijzigen</ResultTitle>
			</ResultLink>

			<ResultLink href="https://www.ondernemersplein.nl/ondernemen/bedrijf-organiseren/rechtsvormen/info-en-advies/alle-rechtsvormen-op-een-rij/">
				<ResultTitle>Alle rechtsvormen op een rij</ResultTitle>
			</ResultLink>

			<ResultLink href="https://www.ondernemersplein.nl/artikel/overzicht-rechtsvormen/">
				<ResultTitle>Overzicht rechtsvormen</ResultTitle>
			</ResultLink>

			<ResultLink href="https://www.ondernemersplein.nl/ondernemen/bedrijf-organiseren/rechtsvormen/">
				<ResultTitle>Rechtsvormen</ResultTitle>
			</ResultLink>

			<ResultLink href="https://www.ondernemersplein.nl/ondernemen/bedrijf-organiseren/rechtsvormen/info-en-advies/aansprakelijkheid-bij-rechtsvormen/">
				<ResultTitle>Aansprakelijkheid bij rechtsvormen</ResultTitle>
			</ResultLink>

			<ResultLink href="https://www.ondernemersplein.nl/artikel/europese-cooperatieve-vennootschap-sce/">
				<ResultTitle>Europese Coöperatieve Vennootschap (SCE)</ResultTitle>
			</ResultLink>

			<ResultLink href="https://www.ondernemersplein.nl/ondernemen/bedrijf-organiseren/aansprakelijkheid-echtgenoot-of-partner-voorkomen/">
				<ResultTitle>
					Aansprakelijkheid echtgenoot of partner voorkomen
				</ResultTitle>
			</ResultLink>

			<ResultLink href="https://www.ondernemersplein.nl/ondernemen/bedrijf-organiseren/rechtsvormen/info-en-advies/buitenlandse-vennootschappen/">
				<ResultTitle>Buitenlandse vennootschappen</ResultTitle>
			</ResultLink>
		</ResultListWrapper>
	)
}
