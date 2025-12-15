import { memo } from 'react'

function ResultDisplay({ result }) {
    console.log('Render ----------> ResultDisplay')
    return <div>{result || ''}</div>
}

export default memo(ResultDisplay)
