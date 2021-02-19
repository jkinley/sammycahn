import React from 'react'
import {Link, useStaticQuery} from 'gatsby'

const ListPages = () => {

    const data = useStaticQuery(graphql`
        query Pages {
            allSitePage {
                edges {
                    node {
                        id
                        path
                    }
                }
            }
        }
    `)

    return (
        <ul>
            {
                data.allSitePage.edges.map(({node}) => {
                    return (
                        <li>
                            <Link to={node.path}>{node.id}</Link>
                        </li>
                    )
                })
            }
        </ul>
    )
}

export default ListPages