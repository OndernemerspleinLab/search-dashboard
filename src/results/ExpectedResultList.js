import React from 'react'
import styled from 'styled-components'
import { titleStyle } from '../styles/bar'
import { Score } from '../score/Score'
import { Media, MediaText, MediaFigure } from '../styles/media'
import { ResultLink, ResultTitle } from './ResultLink'
import { Pencil } from '../svg/Pencil'
import { hemelblauw } from '../colors'
import { nest } from 'recompose'
import { cleanButtonStyle } from '../styles/cleanButton'

const ExpectedResultListWrapper = styled.div`
	flex: auto;
	padding: 0 2rem;
`

const ExpectedResultListTitle = styled.h2`
	${titleStyle};
	text-align: left;
	padding-left: 0;
`

const EditButton = nest(
	styled.button`
		${cleanButtonStyle};
		padding: 0.2rem 0.6rem;
		margin: -0.2rem;
	`,
	styled(Pencil)`
		fill: ${hemelblauw.grijscontrast};
	`,
)

export const ExpectedResultList = () => {
	return (
		<ExpectedResultListWrapper>
			<ExpectedResultListTitle>
				<Media>
					<MediaFigure>Gewenste resultaten</MediaFigure>
					<MediaFigure>
						<EditButton />
					</MediaFigure>
				</Media>
			</ExpectedResultListTitle>

			<ResultLink href="https://www.ondernemersplein.nl/ondernemen/bedrijf-organiseren/rechtsvormen/info-en-advies/alle-rechtsvormen-op-een-rij/">
				<Media>
					<ResultTitle>Alle rechtsvormen op een rij</ResultTitle>
					<Score number={6.5} />
				</Media>
			</ResultLink>

			<ResultLink href="https://www.ondernemersplein.nl/ondernemen/bedrijf-organiseren/rechtsvormen/info-en-advies/een-rechtsvorm-kiezen/">
				<Media>
					<ResultTitle>Een rechtsvorm kiezen</ResultTitle>
					<Score number={1.2} />
				</Media>
			</ResultLink>

			<ResultLink href="https://www.ondernemersplein.nl/artikel/europese-cooperatieve-vennootschap-sce/">
				<Media>
					<ResultTitle>Europese Coöperatieve Vennootschap (SCE)</ResultTitle>
					<Score number={8.9} />
				</Media>
			</ResultLink>

			<ResultLink href="https://www.ondernemersplein.nl/ondernemen/bedrijf-organiseren/rechtsvormen/info-en-advies/aansprakelijkheid-bij-rechtsvormen/">
				<Media>
					<ResultTitle>Aansprakelijkheid bij rechtsvormen</ResultTitle>
					<Score number={5.6} />
				</Media>
			</ResultLink>

			<ResultLink href="https://www.ondernemersplein.nl/regel/rechtsvorm/">
				<Media>
					<ResultTitle>Rechtsvorm</ResultTitle>
					<Score number={3.2} />
				</Media>
			</ResultLink>

			<ResultLink href="https://www.ondernemersplein.nl/ondernemen/bedrijf-organiseren/rechtsvorm-wijzigen/">
				<Media>
					<ResultTitle>Rechtsvorm wijzigen</ResultTitle>
					<Score number={8} />
				</Media>
			</ResultLink>

			<ResultLink href="https://www.ondernemersplein.nl/artikel/overzicht-rechtsvormen/">
				<Media>
					<ResultTitle>Overzicht rechtsvormen</ResultTitle>
					<Score number={6.3} />
				</Media>
			</ResultLink>

			<ResultLink href="https://www.ondernemersplein.nl/ondernemen/bedrijf-organiseren/rechtsvormen/">
				<Media>
					<ResultTitle>Rechtsvormen</ResultTitle>
					<Score number={7.1} />
				</Media>
			</ResultLink>

			<ResultLink href="https://www.ondernemersplein.nl/ondernemen/bedrijf-organiseren/aansprakelijkheid-echtgenoot-of-partner-voorkomen/">
				<Media>
					<ResultTitle>
						Aansprakelijkheid echtgenoot of partner voorkomen
					</ResultTitle>
					<Score number={5} />
				</Media>
			</ResultLink>

			<ResultLink href="https://www.ondernemersplein.nl/ondernemen/bedrijf-organiseren/rechtsvormen/info-en-advies/buitenlandse-vennootschappen/">
				<Media>
					<ResultTitle>Buitenlandse vennootschappen</ResultTitle>
					<Score number={5.2} />
				</Media>
			</ResultLink>
		</ExpectedResultListWrapper>
	)
}
