import { useContext, useEffect, useState } from "react";
import { Card, Col, Container, Dropdown, Form, Row } from "react-bootstrap";
import Styles from "../../Styles";
import Select from "react-select";
import DropDownStyles from "./DropDownStyles";
import CustomerBagContext from "../../../../providers/customer-bag-provider/CustomerBagContext";
import AreaModel from "../../../../models/order/Address/AreaModel";
import AddressService from "../../../../api-service/nova-pochta-service/AddressService";
import CityModel from "../../../../models/order/Address/CityModel";
import WarehouseModel from "../../../../models/order/Address/WarehouseModel";

export type DataDropDown = {
  label: string;
  value: string;
};

const AddressItem = () => {
  const { customerAmount, addressDescription, setAddressDescription, setOrderAddress } =
    useContext(CustomerBagContext);
  const [dataRegions] = useState<DataDropDown[]>([]);
  const [dataCities] = useState<DataDropDown[]>([]);
  const [dataWarehouses] = useState<DataDropDown[]>([]);
  const [currentArea, setCurrentArea] = useState<DataDropDown>();
  const [currentCity, setCurrentCity] = useState<DataDropDown>();
  const [currentWarehouse, setCurrentWarehouse] = useState<DataDropDown>();

  const setAddress = (warehouse: DataDropDown) => {
    setAddressDescription(
      `your address: region: 
        ${currentArea?.label}, 
      city: 
        ${currentCity?.label}, 
      place: ${warehouse?.label}`
    );

    setOrderAddress({
      country: "Ukraine",
      region: currentArea?.value!,
      city: currentCity?.value!,
      place: warehouse?.value!,
    });
  };

  const regionMapper = (regions: AreaModel[]) => {
    dataRegions.length = 0;
    for (let region of regions) {
      dataRegions.push(
        Object.create({
          label: region?.description,
          value: region?.ref,
        })
      );
    }
  };

  const cityMapper = (cities: CityModel[]) => {
    dataCities.length = 0;
    for (let city of cities) {
      dataCities.push(
        Object.create({
          label: city?.description,
          value: city?.ref,
        })
      );
    }
  };

  const warehouseMapper = (warehouses: WarehouseModel[]) => {
    dataWarehouses.length = 0;
    for (let warehous of warehouses) {
      dataWarehouses.push(
        Object.create({
          label: warehous?.description,
          value: warehous?.ref,
        })
      );
    }
  };

  useEffect(() => {
    if (customerAmount > 0 && dataRegions.length === 0) {
      AddressService.getAreas().then((res) => {
        if (res.data) {
          regionMapper(res.data);
        }
      });
    }
  }, []);

  useEffect(() => {
    dataCities.length = 0;
    setCurrentCity({ label: "Select ...", value: "" });
    if (currentArea?.value) {
      AddressService.getCities(currentArea.value).then((res) => {
        if (res.data) {
          cityMapper(res.data);
        }
      });
    }
  }, [currentArea]);

  useEffect(() => {
    dataWarehouses.length = 0;
    setCurrentWarehouse({ label: "Select ...", value: "" });
    if (currentCity?.value) {
      AddressService.getWarehouses(currentCity.value).then((res) => {
        if (res.data) {
          warehouseMapper(res.data);
        }
      });
    }
  }, [currentCity]);

  useEffect(() => {
    if (dataWarehouses.length === 0) {
      setAddressDescription("");
    }
  }, [currentWarehouse]);

  return (
    <>
      <Row style={{ overflow: "auto" }}>
        <Container>
          <Card border="info" className={Styles.container} style={{ paddingBottom: 10 }}>
            <Row style={{ paddingTop: 20, paddingBottom: 20, fontWeight: "bold" }}>Address</Row>

            <Form>
              <Form.Group>
                <Row>
                  <Col sm={6}>
                    <Form.Label className={Styles.label}>Region</Form.Label>
                    <Select
                      styles={DropDownStyles}
                      options={dataRegions}
                      onChange={(val) => setCurrentArea(val!)}
                      value={currentArea}
                    />
                  </Col>
                  <Col sm={6}>
                    <Form.Label className={Styles.label}>City</Form.Label>
                    <Select
                      styles={DropDownStyles}
                      options={dataCities}
                      onChange={(val) => setCurrentCity(val!)}
                      value={currentCity}
                    />
                  </Col>
                </Row>
              </Form.Group>
              <Form.Group>
                <Row>
                  <Col sm={6}>
                    <Form.Label className={Styles.label}>Place</Form.Label>
                    <Select
                      styles={DropDownStyles}
                      options={dataWarehouses}
                      onChange={(val) => {
                        setCurrentWarehouse(val!);
                        setAddress(val!);
                      }}
                      value={currentWarehouse}
                    />
                  </Col>
                </Row>
              </Form.Group>
            </Form>
          </Card>
          <Row className={Styles.textFooter}> {addressDescription} </Row>
          <br />
        </Container>
      </Row>
    </>
  );
};

export default AddressItem;
