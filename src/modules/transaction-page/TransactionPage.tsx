import React, { useEffect } from 'react'
import Layout from '../../layout'
import { useAppDispatch, useAppSelector } from '../../store'
import { fetchDatabaseTransactionsHistory } from '../../store/actions/transaction-actions'
import { transactionLoadingSelector, transactionSortedByDateItemsSelector } from '../../store/selectors/transactions-selectors'
import Transaction from './components'
import { TransactionHistoryTitle, TransactionsMainContainer } from './styles'

const TransactionPage = () => {
    const loading = useAppSelector(transactionLoadingSelector);
    const dispatch = useAppDispatch();
    const transactions = useAppSelector(transactionSortedByDateItemsSelector);
    useEffect(() =>{
        dispatch(fetchDatabaseTransactionsHistory());
    },[dispatch])
    if(loading)
        return <Layout ></Layout>
  return (
    <Layout scrollable={true}>
        <TransactionsMainContainer>
            <TransactionHistoryTitle>Transaction history</TransactionHistoryTitle>
            {transactions.map(transaction => <Transaction key={ transaction.id} transaction = {transaction}/>)}
        </TransactionsMainContainer>
    </Layout>
  )
}

export default TransactionPage