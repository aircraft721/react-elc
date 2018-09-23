from flask import Flask, jsonify, request

from app.model.expense import Expense, ExpenseSchema
from app.model.incomes import Income, IncomeSchema
from app.model.transaction_type import TransactionType

app = Flask(__name__)

transactions = [
	Income('Salary', 5000),
	Income('Dividends', 200),
	Income('pizza', 25),
	Income('Rock Concert', 100)
]


@app.route('/incomes')
def get_incomes():
	schema = IncomeSchema(many=True)
	incomes = schema.dump(
	filter(lambda t: t.type == TransactionType.INCOME, transactions)
  )
	return jsonify(incomes.data)


@app.route('/incomes', methods=['POST'])
def add_income():
	income = IncomeSchema().load(request.get_json())
	transaction.append(income.data)
	return '', 204

@app.route('/expenses', methods=['POST'])
def add_expenses():
	expense = ExpenseSchema().load(request.get_json())
	transaction.append(expense.data)
	return '', 204

if __name__ == '__name__':
	app.run()