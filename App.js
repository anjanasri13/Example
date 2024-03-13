import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./CSS/Styles";
import { AntDesign, Entypo } from "@expo/vector-icons";

const data = [
  {
    title: "AL DALLIL ELECTRICAL & SANITARY",
    email: "rasedlm69@gmail.com",
    mode: "Payment",
    code: "Code:S004",
  },
  {
    title: "QUBA SANITARY WARE TR",
    email: "mesonkhan@gmail.com",
    mode: "Collection",
    code: "Code:S006",
  },
  {
    title: "AL ROYAH AL MOTAMIZAH BLDG.MAT.TR",
    email: "alroyahbldg@gmail.com",
    mode: "New Order",
    code: "Code:S006",
  },
  {
    title: "AL HUSSAIN SANITARY ELECTRICAL WORKS",
    email: "nasrudhin1982@cloud.com",
    mode: "Refill",
    code: "Code:S006",
  },
  {
    title: "AL DENMARK ELECT.SANITARY WARE R LLC",
    email: "mesonkhan@gmail.com",
    mode: "Delivery",
    code: "Code:S006",
  },
  {
    title: "FURSAN HATA ALUMINIUM & GLASS",
    email: "mohammedjahangiralam1212@gmail.com",
    mode: "New Order",
    code: "Code:S006",
  },
  {
    title: "SUHAIL BULIDING MATERIAL LLC",
    email: "sohel-noapara@yahoo.com",
    mode: "New Order",
    code: "Code:S006",
  },
  {
    title: "ROHMIX BUILDING MATERIALS TRADING LLC",
    email: "rohmix1001@yahoo.com",
    mode: "New Order",
    code: "Code:S006",
  },
];

const getModeColor = (mode) => {
  switch (mode) {
    case "Payment":
      return "#FFE602"; 
    case "Collection":
      return "#E6E3F9"; 
    case "New Order":
      return "#E1F9D7"; 
    case "Refill":
      return "#FFE3E3";
    case "Delivery":
      return "#D7ECF9";
    default:
      return "#000000"; 
  }
};
export default function App() {
  return (
    <View style={styles.Main}>
      <View style={styles.container}>
        <View style={{ position: "absolute", left: 0 }}>
          <AntDesign name="left" size={30} color="black" />
        </View>
        <View style={{}}>
          <Text style={{ fontWeight: 500, fontSize: 20 }}>My Beat</Text>
        </View>
      </View>
      <View
        style={{
          borderBottomWidth: 3,
          borderBottomColor: "#CAC4F6",
          width: "100%",
        }}
      ></View>

      <View style={styles.box}>
        <View style={{ position: "absolute", left: 0 }}>
          <Entypo name="location" size={30} color="black" />
        </View>
        <View>
          <Text style={{ fontSize: 18, paddingLeft: 50, fontWeight: 500 }}>
            Route:North Side -00112
          </Text>
        </View>
      </View>

      <View style={styles.View1}>
        <View>
          <Text style={{ fontSize: 18, fontWeight: 500 }}>
            Today Dealer list(8)
          </Text>
        </View>
        <View>
          <Text style={{ fontSize: 18, fontWeight: 500 }}>Filter</Text>
        </View>
      </View>

      <FlatList
        data={data}
        showsVerticalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <View key={index} style={styles.View2}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <View style={{ width: "70%" }}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.email}>{item.email}</Text>
              </View>
              <View style={{ gap: 10 }}>
                <View
                  style={[
                    styles.Mode,
                    { backgroundColor: getModeColor(item.mode) },
                  ]}
                >
                  <Text style={{ fontWeight: 500, fontSize: 12 }}>
                    {item.mode}
                  </Text>
                </View>
                <Text style={styles.code}>{item.code}</Text>
              </View>
            </View>
          </View>
        )}
      />


      
      <TouchableOpacity
          style={{
          backgroundColor: "#7869E7",
          marginHorizontal: 15,
          marginVertical: 15,
          padding: 20,
          alignItems: "center",
          borderRadius: 6,
        }}
      >
        <Text style={{ color: "white", fontWeight: 500, fontSize: 18 }}>
          Confirm
        </Text>
      </TouchableOpacity>
    </View>
    
  );
}
