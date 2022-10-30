import { Button, Container, Col, Row, Table } from "react-bootstrap"
import { useCart } from "react-use-cart"
import { useThemeHook } from "../GlobalComponents/ThemeProvider"
import { BsCartCheck, BsCartX } from "react-icons/bs"
import { FaTrash } from "react-icons/fa"

function Cart() {
  const [theme] = useThemeHook()
  const {
    isEmpty,
    totalUniqItems,
    totalItems,
    items,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart()
  return (
    <Container className="py-4 mt-5">
      <h1
        className={`${
          theme ? "text-light" : "text-light-primary"
        } my-5 text-center`}
      >
        {isEmpty ? "Your Cart is Empty" : "The Cart"}
      </h1>
      <Row className="justify-content-center">
        <Table
          responsive="sm"
          striped
          bordered
          hover
          variant={theme ? "dark" : "light"}
          className="mb-5"
        >
          <tbody>
            {items.map((item, i) => {
              return (
                <tr key={i}>
                  <td>
                    <div
                      style={{
                        background: "white",
                        height: "8rem",
                        overflow: "hidden",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <div style={{ padding: "0.5rem" }}>
                        <img
                          src={item.image}
                          style={{ width: "4rem" }}
                          alt={item.title}
                        />
                      </div>
                    </div>
                  </td>
                  <td>
                    <h6
                      style={{
                        whiteSpace: "nowrap",
                        width: "14rem",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                    >
                      {item.title}
                    </h6>
                  </td>
                  <td>$ {item.price}</td>
                  <td>Quantity: {item.quantity}</td>
                  <td>
                    <Button
                      onClick={() =>
                        updateItemQuantity(item.id, item.quantity - 1)
                      }
                      className="ms-2"
                    >
                      -
                    </Button>
                    <Button
                      onClick={() =>
                        updateItemQuantity(item.id, item.quantity + 1)
                      }
                      className="ms-2"
                    >
                      +
                    </Button>
                    <Button
                      onClick={() => removeItem(item.id)}
                      variant="danger"
                      className="ms-2"
                    >
                      <FaTrash />
                    </Button>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </Table>
        {!isEmpty && (
          <Row
            style={{ position: "fixed", bottom: 0 }}
            className={`${
              theme ? "bg-light-black text-light" : "bg-light text-black"
            } d-flex align-items-center justify-content-center w-100`}
          >
            <Col className="py-2 d-flex align-items-center justify-content-end">
              <h4>Total Price: $ {cartTotal.toLocaleString('en')}</h4>
            </Col>
            <Col className="p-0" md={4}>
              <Button
                variant="danger"
                className="m-2"
                onClick={() => emptyCart()}
              >
                <BsCartX size="1.7rem" /> Clear Cart
              </Button>           
            </Col>
          </Row>
        )}
      </Row>
    </Container>
  )
}

export default Cart
