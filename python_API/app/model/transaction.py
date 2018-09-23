import datetime as dt

from marshmallow import Schema, fields

class Transaction():

    def __init__(self, description, amount, type):
        self.description = description
        self.amount = amount
        self.type = type
        
    # __repr__ should return a printable representation of the object
    def __repr__(self):
        return '<Transaction(name={self.description!r})>'.format(self=self)

class TransactionSchema(Schema):
    description = fields.Str()
    amount = fields.Number()
    type = fields.Str()
    created_at = fields.Date()