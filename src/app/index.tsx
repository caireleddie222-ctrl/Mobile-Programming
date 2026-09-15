import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { colors } from "../app/colors";
import AuthButton from "../components/AuthButton";
import AuthFooter from "../components/AuthFooter";
import AuthHeader from "../components/AuthHeader";
import AuthInput from "../components/AuthInput";
import AuthScreenLayout from "../components/AuthScreenLayout";
import Checkbox from "../components/Checkbox";
import PasswordInput from "../components/PasswordInput";

export default function SignInScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleSignIn = () => {
    console.log("Sign in:", { email, password, rememberMe });
  };

  return (
    <AuthScreenLayout>
      <AuthHeader
        title="Sign in to MLBB"
        subtitle="Buy one today get one tomorrow"
      />

      <View style={styles.formContainer}>
        <Text style={styles.label}>Email address</Text>
        <AuthInput
          iconName="mail-outline"
          placeholder="shoujaboy@example.com"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <View style={styles.passwordHeader}>
          <Text style={styles.label}>Password</Text>
          <TouchableOpacity>
            <Text style={styles.forgotPassword}>Forgot password?</Text>
          </TouchableOpacity>
        </View>
        <PasswordInput value={password} onChangeText={setPassword} />

        <Checkbox
          checked={rememberMe}
          onToggle={() => setRememberMe(!rememberMe)}
          label="Remember me on this device"
        />

        <AuthButton
          title="Sign In to Account"
          onPress={handleSignIn}
          style={styles.button}
        />
      </View>

      <AuthFooter
        text="Don't have an account?"
        actionText="Sign up"
        onPress={() => console.log("go to register")}
      />
    </AuthScreenLayout>
  );
}

const styles = StyleSheet.create({
  formContainer: { width: "100%" },
  label: {
    fontSize: 14,
    fontWeight: "600",
    color: colors.labelText,
    marginBottom: 8,
  },
  passwordHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  forgotPassword: {
    fontSize: 14,
    color: colors.primary,
    fontWeight: "500",
    marginBottom: 8,
  },
  button: { marginBottom: 32 },
});
