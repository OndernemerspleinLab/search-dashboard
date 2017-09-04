export const defaultSearchQuery = `
{
	"explain": false,
	"from": 0,
	"size": 10,
	"_source": [
		"dcterms:title",
		"op:url",
		"dcterms:description"
	],
	"query": {
		"bool": {
			"should": [
				{
					"multi_match": {
						"query": $searchTerm,
						"type": "most_fields",
						"fields": [
							"dcterms:title.std^2",
							"op:h2.std",
							"op:h3.std",
							"op:content.std"
						],
						"operator": "and",
						"minimum_should_match": "60%",
						"analyzer": "zoek_analyzer",
						"boost": 10
					}
				},
				{
						"multi_match": {
							"query": $searchTerm,
							"type": "most_fields",
							"fields": [
								"dcterms:title^2",
									"op:h2",
									"op:h3"
							],
							"operator": "and",
							"minimum_should_match": "90%",
							"boost": 1
						}
				}
			]
		}
	},
	"filter": {
		"bool": {
				"should": [
					{
						"bool": {
							"must": [
								{
									"exists": {
										"field": "op:url"
									}
								},
								{
									"not": {
										"term": {
											"isDuplicate": false
										}
									}
								}
							]
						}
					}
				]
		}
	},
	"highlight": {
		"pre_tags": [
			"<strong>"
		],
		"post_tags": [
			"</strong>"
		],
		"fields": {
			"op:content.std": {
				"number_of_fragments": 2,
				"fragment_size": 150
			},
			"op:content": {
				"number_of_fragments": 2,
				"fragment_size": 150
			},
			"dcterms:description": {
				"number_of_fragments": 2,
				"fragment_size": 150
			}
		}
	}
}
`
