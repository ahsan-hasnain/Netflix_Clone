import React from 'react'
import BounceLoader from 'react-spinners/BounceLoader'
const override = {
    display: "block",
    margin: "0 auto",
    marginTop: 'calc(50vh - 25px)', /* (Container height - Loader height) / 2 */
    marginLeft: 'calc(50vw - 25px)',
    borderColor: 'red'
};
export default function Loader() {
    return (
        <BounceLoader
            color={'red'}
            loading={true}
            cssOverride={override}
            size={80}
            aria-label="Loading Spinner"
            data-testid="loader" />
    )
}
