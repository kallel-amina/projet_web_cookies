package com.sweetbites.backend.config;

import com.sweetbites.backend.model.Product;
import com.sweetbites.backend.model.Role;
import com.sweetbites.backend.model.User;
import com.sweetbites.backend.repository.ProductRepository;
import com.sweetbites.backend.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;

@Component
@RequiredArgsConstructor
public class DataInitializer implements CommandLineRunner {

    private final UserRepository userRepository;
    private final ProductRepository productRepository;
    private final PasswordEncoder passwordEncoder;

    @Value("${app.admin.email}")
    private String adminEmail;

    @Value("${app.admin.password}")
    private String adminPassword;

    @Override
    public void run(String... args) {
        if (!userRepository.existsByEmail(adminEmail)) {
            User admin = User.builder()
                    .email(adminEmail)
                    .password(passwordEncoder.encode(adminPassword))
                    .role(Role.ROLE_ADMIN)
                    .build();
            userRepository.save(admin);
        }

        List<Product> defaultProducts = List.of(
                Product.builder()
                            .name("Chocolate Chunk Delight")
                            .description("Rich dark chocolate chunks")
                            .price(new BigDecimal("3.75"))
                            .stock(100)
                            .active(true)
                            .category("cookies")
                            .imageUrl("https://lh3.googleusercontent.com/aida-public/AB6AXuCfrJx0tWaBAzLour74tDY_cSDSNTOChFmo2Al1bXqOhb9qbyu523_qL-AyyXaaep6UrmDPiVIhr6MerlCZgFvlj5H3cl6_nQ0RTBq0_82i3Pzpqsgza5AnP_dJh6g4MzZ8Q93uwEk72P6ivzrhvyEGNZCZ61IURRVVGjyGnx1BusRnFgn7O_RuSmD3nqRSD35vY9Rs6O-7M7wC7JyMhIIGH1QUZVjBwe9fgEkTgaaCi1Pm63-79tq9n27yPyixBXwzX1vwOveER_c")
                            .imageAlt("Chocolate Chunk Delight")
                            .build(),
                Product.builder()
                            .name("Raspberry White Chocolate")
                            .description("Tart raspberry & white choc")
                            .price(new BigDecimal("4.10"))
                            .stock(100)
                            .active(true)
                            .category("cookies")
                            .imageUrl("https://lh3.googleusercontent.com/aida-public/AB6AXuAnKQ0VEvaqiUnlX91zNdZ2wZoq0klBTTRq0aqyfibCtlHI9HGjX7p2hXMhsswN2vgz_gtptM62Gr-DDldI9VXjXnNvtxqKdePjO_VoygS6LYSx8CzQMaNwov3MFoQcTWJQP3y12Va_3Gfea2E1645mcdc4TjvoCfm9EvGQdaMGM9cOPfrXi4hcivac1y0qguJUv6HZZIqEujYi0sICGd_wZNIzas6rrxX53P6MvUlHMTEemMXG_uk0jKsXxxoWcO2nL_uPVIHYRuU")
                            .imageAlt("Raspberry White Chocolate")
                            .build(),
                Product.builder()
                            .name("Salted Caramel Pecan")
                            .description("Caramel & roasted pecans")
                            .price(new BigDecimal("4.50"))
                            .stock(100)
                            .active(true)
                            .category("cookies")
                            .imageUrl("https://lh3.googleusercontent.com/aida-public/AB6AXuDMOWb9yDLck7b5Q6_TxOil2ILYw_PD3JZoGJfkmhED4xLsnBDgJOZASnzeWQjsRLKBRcAtiCXEefEGrhXU8m7_KwvU3sI3lEGlFEf19apNlg8OSC2ga2-laeLzWIibbeyMVUT05A9Kig7g97EzYZHeFkPMh5rOYqp7SqH9eiqQW2UrlohebtIA-c3XoW5X8sgvVqcIXYili2_ef6rQ_LLBgCwN3Dgqh7vP-Fe3EQvEkV6NLfrpkZDiPslQH-7BdnwJRKLshiYjBRo")
                            .imageAlt("Salted Caramel Pecan")
                            .build(),
                Product.builder()
                            .name("Oatmeal Raisin Spice")
                            .description("Warm spice & hearty oats")
                            .price(new BigDecimal("3.25"))
                            .stock(100)
                            .active(true)
                            .category("cookies")
                            .imageUrl("https://lh3.googleusercontent.com/aida-public/AB6AXuBa47T_wSP8e8Zx1frPTlfemySki63wIEuA7jg7dPJ4zeTHybw2Badk2T7hmj2tNbVL1ZkCP0OJh9n94dk_QTsKZXP8IlnEkSz7_o802rxqkEzl9ynFjqjfTYe4g-s4d_RPXK3MA80vQf0pPivICNmt8_yrhDua6mci2L6MJaDcccNgeBy_dzRaYsudW7fFV9x92V_m1nIOryGY3BHkBAA2H5jPVNe53-wxsdFxTngL_54uiuWurUM3G3YOK4QhPklUi4OF3Qm1jJQ")
                            .imageAlt("Oatmeal Raisin Spice")
                            .build(),
                Product.builder()
                            .name("Double Fudge Brownie")
                            .description("Dense double-fudge")
                            .price(new BigDecimal("4.75"))
                            .stock(100)
                            .active(true)
                            .category("cookies")
                            .imageUrl("https://lh3.googleusercontent.com/aida-public/AB6AXuDT7wXOmJHwyxGit0w-eVh_2v3LGLT7GejCM9G4ZdRzTo2fjLE7OjBeRcv1dJpuqys0kzyzl4QxOJrnud3Kv-RI-2MFaj1_10TuXAnY3VtU0_cjUmPPkuy2d9EidX6NKhFuedODIfX65JHFIJsu52Xn3Ay15XbOLgjRoKb8JQxbc96i0ZO33WqysxQGTen7FLb6PPPPqWXKpNqimOA2ZyNCqfwEsSS6vtJlW71XpRjUB0QCoTBT8JEzdoX0y9aS1SXyO7CaIVtQqzA")
                            .imageAlt("Double Fudge Brownie")
                            .build(),
                Product.builder()
                            .name("Lemon Zest Shortbread")
                            .description("Citrus shortbread")
                            .price(new BigDecimal("3.40"))
                            .stock(100)
                            .active(true)
                            .category("cookies")
                            .imageUrl("https://lh3.googleusercontent.com/aida-public/AB6AXuCOnLck-jP8HbabxUuKbe8un21M9OT8SNl3GXlIhqjVMSiwbYsMo2GVejI0Iwo5ZpwNal3P26ocBeLzJWkqXV3D7e6RTNlY0U7xTv5MjKMU-wXLvCdz1tk2zza68OUsVCLy90xmGzm2ESCccEfglzjqUSYzplvJMhlpyMt3poNyUjsO9-BNkBm52YlQpwmYBKUYnC0ywLxuXIlsJNVDFmbJVpybpV3eF179OXGZcBai9BhnkfM2mNfjXCyycGF_dEOCcd2_wMYjCcw")
                            .imageAlt("Lemon Zest Shortbread")
                            .build(),
                Product.builder()
                            .name("Matcha Green Tea")
                            .description("Subtle matcha flavor")
                            .price(new BigDecimal("3.95"))
                            .stock(100)
                            .active(true)
                            .category("cookies")
                            .imageUrl("https://lh3.googleusercontent.com/aida-public/AB6AXuDm0gE9H_twJ1OU6bwITvAOMBunbBVOTFfzPaqlDGc7m1Mo0zRVP8pWCbHL8BCjmNY9GBGE3sfLj2Wqv_FE4zyI7Acn9p5u_GV8jYeLI1IHBXt_qVbwR9F5O7nNQfBt7u_jl7zGjh3WRXNzuifUcahD4Dv69aM0z-Pj3kihvF_tLJFFXEAJeyyslWVlNEhAlr_NSoeejmR5lMa7zRP9bM_e0VReHbFkXnNCWmMuAIk_7_4qg_63fdFNXFgfooZ0w-aHkh8nZ8lExYo")
                            .imageAlt("Matcha Green Tea")
                            .build(),
                Product.builder()
                            .name("Almond Biscotti Crisp")
                            .description("Crunchy almond biscotti")
                            .price(new BigDecimal("3.60"))
                            .stock(100)
                            .active(true)
                            .category("cookies")
                            .imageUrl("https://lh3.googleusercontent.com/aida-public/AB6AXuAcWRPuUYqgICn6X0cJ6fDNdL0P343Awfk-5w6eCqRa2bXjSWtDBbu2d5jqk-SHhkTl_xjqSiy8wMKuxD1LnEYWqQFFfTX9DuF2iHvMYYh4iBA1sx4UzPVBfoK1pkHwcdTpC6qd19HfBCB9uGHaCohNIZC_HO1teueudWTadCTyMbmdgh-C5do35Z1YgYnMofsJXSXPUyMJtdAgWJPZ3HAVo89hyiOi39RzkDv2-DmsCOVuyDDj3llkAL28L1mmw_i3DsA4ApUqI_M")
                                .imageAlt("Almond Biscotti Crisp")
                                .build(),
                        Product.builder()
                            .name("Classic Fudge Brownie")
                            .description("Espresso & Mascarpone")
                            .price(new BigDecimal("4.50"))
                            .stock(100)
                            .active(true)
                            .category("brownies")
                            .imageUrl("https://lh3.googleusercontent.com/aida-public/AB6AXuA5lELSmmqAoc2VIAnPgjrTU2YsrJHF_Flpgwx_EzrZNGdNd2ZnWYbxBYvbH7P3Wi5zDux6feV2p-rG2vYacBF6RIXpoxze-Ks6HGSIXaB-QXnoGXYnAYIGEa1v00Nsfn5x8vNGsERcfGRDLp31nHI9jp2o2HpxP7jhMyiZTFGjRCWDkotXqDHLICUIM5aCtvp2cPR8xUWAZ8E2YwygAp4hPK0VWcktRqLi_Qfh5yzwTMxbKqglxA4IkoEUF8ycoNxop_MbXpW6apc")
                            .imageAlt("A slice of classic Fudge Brownie on a white plate")
                            .build(),
                        Product.builder()
                            .name("Salted Caramel Brownie")
                            .description("Sweet & Salty Caramel")
                            .price(new BigDecimal("5.00"))
                            .stock(100)
                            .active(true)
                            .category("brownies")
                            .imageUrl("https://lh3.googleusercontent.com/aida-public/AB6AXuDfGMccOxSMEPjI1anmop0LowEKRtYId1Yxb0i38w7B7lFapOAkOeOqBKyQkB1y8cp9-D7h9zAJ4QZ8aPY_7e_P44XcZeJ-hh7Mt3ocf51z6iMG5xM4GBrpezARPHjsi8Rt0lUw_XsMITEps2Za-TnmMfgJVfg-ijU3o8QPEjxb5KN4Apcg50c4yqpSaTHXofnrSkiOZQFBIf6kuBfPo1PRwOXLhlvaSnyDGDotchN6LfnbKCaypGA8h1Dcsi2xcyhL8MmE_ZAbSuE")
                            .imageAlt("A caramel tiramisu drizzled with rich caramel sauce")
                            .build(),
                        Product.builder()
                            .name("Triple Chocolate Chunk")
                            .description("Rich Chocolate & Nut")
                            .price(new BigDecimal("5.50"))
                            .stock(100)
                            .active(true)
                            .category("brownies")
                            .imageUrl("https://lh3.googleusercontent.com/aida-public/AB6AXuCQFR-Qsq03K2_L-7yXrKYWgp_BPyOyhpbeejoTkK3GadjReuCE2vrWCT1NaD-E7WuYgtjtubkqoCqawK_GfWuPUtntnAxeJy39SE2yeLdCaJBGFlKgdPAtD6esCfppH-vKJK5yLT26PtqYEGXdRAkMPJb6QCEK6fE1Wh5P2ZCTXSo6BuybZjbgh1nktbvXhNtaV6Y18wNeGiNowM2GYYHNe5Zt2UbkrhtAvzAB3INQxFfKklmQqMH_dRlWVzSnaa5Ni35wtVel54M")
                            .imageAlt("A rich chocolate hazelnut tiramisu topped with chopped hazelnuts")
                            .build(),
                        Product.builder()
                            .name("Walnut Wonder Brownie")
                            .description("Walnut Wonder Infusion")
                            .price(new BigDecimal("5.00"))
                            .stock(100)
                            .active(true)
                            .category("brownies")
                            .imageUrl("https://lh3.googleusercontent.com/aida-public/AB6AXuCcFY9qVMEhJWWFqvuYzsqCkdXZvSmDYSAMT-Ao0WQwjTY04KEvDjvc_Ew2ebOYHka0wZJUzK8Nor3VLA6uUlLw5uQQflIv0EFqapZRbbCdWZlZfBMMqPKubEvgaNKcwWE7fJNCiGlirQTBPJs8KasBkPqvErf_vdlOaVTqG06NO7k85-ALZl9faOhP61m_A9rp4lT68nLG8nuHxTV0gEujCufJsu1hXAQzfUMA8bV1ey74Fy0HXxgBI_ddHnFhh4GwpUzsPABAa60")
                            .imageAlt("A bright and zesty lemon tiramisu with lemon slices")
                            .build(),
                        Product.builder()
                            .name("Peanut Butter Swirl")
                            .description("Tangy Peanut Butter Twist")
                            .price(new BigDecimal("5.25"))
                            .stock(100)
                            .active(true)
                            .category("brownies")
                            .imageUrl("https://lh3.googleusercontent.com/aida-public/AB6AXuCULfXYtfQBDl8QcqnRDlHk2Zt66zeHCNo9EaKLoJr_DAGTpcU_UxEbx-DqJrCmL5y0_2My3ygxli3dh1jT53LDwzANFewCT6JgK9X768aaEuvdHLpCrrLIrSwpe9EqUeE7GY-FbAv05Ax-xIuvTjse4VvPdQUlWaJchnjVbA2gdqqQkEYlT1C3B-Rc4VomCUdRTqJUbZDRzSCzxkNKJKxskP0eJpkSRoEXpRtSIckfxR2XlzGEOM0aei9ge6GaC1hIkmmE5FeuweM")
                            .imageAlt("A rich peanut butter brownie topped with chopped hazelnuts")
                            .build(),
                        Product.builder()
                            .name("Espresso Kick Brownie")
                            .description("Espresso & Mascarpone")
                            .price(new BigDecimal("5.25"))
                            .stock(100)
                            .active(true)
                            .category("brownies")
                            .imageUrl("https://lh3.googleusercontent.com/aida-public/AB6AXuCzJ1oqh5p9_w_9WmHgQajhSVd6loilVF_xQh0hlkWakGE21Lb6D6fpW2-IYt7Jzx8MLF6RW1m2gxYpXTnMr-TuC9uCud5WDX2rb5xMKbW5vwnAAMSspzI2pi18jxyYOcJ4cb_yitKxrbxfWRbik6n5rO5j8aTNB6G49-Wo9PvixIV9Yd_E85qktM5StK7IXLgxG88pkagTgfhTBkJr1kLOQUNWZxgGVLsGU9vMHL-YK_43HnKapN_yzNM0rOS4pS_WYIqaiFBVLCQ")
                            .imageAlt("A delicate pistachio tiramisu with green pistachio cream")
                            .build(),
                        Product.builder()
                            .name("Ruby Chocolate Bliss")
                            .description("Tangy Raspberry Twist")
                            .price(new BigDecimal("5.75"))
                            .stock(100)
                            .active(true)
                            .category("brownies")
                            .imageUrl("https://lh3.googleusercontent.com/aida-public/AB6AXuAVzuIxXdY8VnZAnJ0R8tRUFdKPRzuSDUg0Nx1U3ZdPZzv42OYa0kS7ODJzc-W0lJ0reoBZPOh8GbYHB9n8kE46A_uEjFo2YAaF0xnjSpk62k86NUWtTn46ACcPf1LFLYhTu35CFGQWhHnDYohFV7kFXTlaXk4LBWJoSpKKWn3QqPcclj_2NWVFMGC7k-HRFyNhZb6_nYgFOODFg1SovfDxsMheD2vx7la7Mznjad8MocJ4KX4LJLw59bxlqcKsANpErqKYl07fCXA")
                            .imageAlt("A rich chocolate hazelnut tiramisu topped with chopped hazelnuts")
                            .build(),
                        Product.builder()
                            .name("Mint Chocolate Delight")
                            .description("Sweet & Salty Caramel")
                            .price(new BigDecimal("5.25"))
                            .stock(100)
                            .active(true)
                            .category("brownies")
                            .imageUrl("https://lh3.googleusercontent.com/aida-public/AB6AXuADTuBXVh6KaaLPiOEos3j9kiFXEWQL8m4zQ59ST-jPdT6-yLs5HNtCJegaLQy657pi2JvuPhJIZENCxWDdv402xcWBNkYGq2LIaXsaQ7UEdb7wIs-zOlLak5T5Y_ZJ9EccZzHmFldtNMBe1Ji-btyS-NrEoh8nOvKf9rpEc1N7OcJg-AI7TjTfZFjx5hODDyvNko3NBmtRMjikfqDU_XRwZU9romU3pOIkp7MV1-gaoudNJ2fj09XpCcOujSasLPHuSqgkoY9npsA")
                            .imageAlt("A caramel tiramisu drizzled with rich caramel sauce")
                            .build(),
                        Product.builder()
                            .name("Classic Italian Tiramisu")
                            .description("Espresso & Mascarpone")
                            .price(new BigDecimal("12.00"))
                            .stock(100)
                            .active(true)
                            .category("tiramisu")
                            .imageUrl("https://lh3.googleusercontent.com/aida-public/AB6AXuCNxY7WwvCSMUFfur-re7K-GIXXKoDw9rreojJWShaF8ghGT9crube9LV3fdj57-Pmhjp6MAtOCQBcHJ0InG6jvMYVu_tWsb6DAXprZl5Gs-aWYmu2smTKQq56nO7oXiQm1a9ltDQgbWkxj4JhQWPjKKRtT7otS-J-E-QAIpM3fxG9AUOXxnA1wD8hc_l-IDNl2zsbeTWbyYBjplZexG3ib58DAsUxxBZ7AfMd3PNSwEACVIT7Z_DfYkK58GY5nf4ez9FjQc7qgzOE")
                            .imageAlt("A slice of classic Italian tiramisu on a white plate")
                            .build(),
                        Product.builder()
                            .name("Strawberry Tiramisu")
                            .description("Fresh Strawberry & Cream")
                            .price(new BigDecimal("14.00"))
                            .stock(100)
                            .active(true)
                            .category("tiramisu")
                            .imageUrl("https://lh3.googleusercontent.com/aida-public/AB6AXuAy6m2eqkE60pcrwMvLALigO7_AfF-_OQNI5u7Ur1cv1vsxE9dL2Msr1uulwjbGRdhN_YuVbcPtzm-ICZESTZ3bl2HsOkyZBE3jVnWLi-0geo7c8ZEEZ_aTO2h59bDh22u0zSrWuJu8LXG-9SzNP_ov8Q7bIq9AuDP4UZ_oDEMCjlzbAEN-nRuVk8DXFuwmRsPwiHbUG2KhoPTotVudJ1-AyNkPRxOaPcjin5rcgdN4dsiE_ViEIxOGJXrAHMnfMd2zG08afg1vX7k")
                            .imageAlt("A vibrant strawberry tiramisu garnished with fresh strawberries")
                            .build(),
                        Product.builder()
                            .name("Matcha Tiramisu")
                            .description("Earthy Green Tea Twist")
                            .price(new BigDecimal("14.00"))
                            .stock(100)
                            .active(true)
                            .category("tiramisu")
                            .imageUrl("https://lh3.googleusercontent.com/aida-public/AB6AXuA3799714NlN6_FzGQie3sIYkuBVkIuB8vs0vlIi9ANHll423Q0WmlKBT8F4DciRAosjxyT-aZGp3HrbudI4-s9ZQO9VxgrAiOGetKh-LEuq7rMrIC3RgzVp8c9FH6FTzFxdrGUB-WJ84eWrBoXUBTh9eR5E5WC2rDsBd933fKuUkcaP2F4hfdJ__fHCtvvAjlIYd20Tl4I1dD9ZSlqv7yIZ4HFYG22GubbfVyCgN9oWUYoQR7CEq0rN-4-QAUB3wAwS7XEFZ1WbUI")
                            .imageAlt("A slice of matcha tiramisu with green tea powder dusted on top")
                            .build(),
                        Product.builder()
                            .name("Lemon Tiramisu")
                            .description("Zesty Lemon Infusion")
                            .price(new BigDecimal("13.50"))
                            .stock(100)
                            .active(true)
                            .category("tiramisu")
                            .imageUrl("https://lh3.googleusercontent.com/aida-public/AB6AXuC5GUaHztDfimPqntRSMfSMjqACR8FAarPcZo5DveJQoSuD3c7mewv6nuqhhCaPRM_f5mvDo9TgdwF871zJyzBDj0njL5C6-dVD9QrDRoTMe4cvbiXAHGSmWk5_GcYjz6iilrVO62cJZsLHfvV1VpBEPs1kfzgVrCoI8sfn_qQaz2ITzNzZvnse47OjDCPDNOCYbVmS6_DmvmxO1J932YAjTnxkEjNrKtN8DPP20svmi9NW-MWlxSBZxPTSXAfZbF4c4EknfS0aPNI")
                            .imageAlt("A bright and zesty lemon tiramisu with lemon slices")
                            .build(),
                        Product.builder()
                            .name("Chocolate Hazelnut Tiramisu")
                            .description("Rich Chocolate & Nut")
                            .price(new BigDecimal("15.00"))
                            .stock(100)
                            .active(true)
                            .category("tiramisu")
                            .imageUrl("https://lh3.googleusercontent.com/aida-public/AB6AXuB8r8Qz3kRA-RLTAYYkE5v7kv_1iYHbDNTizBncTV6HicfeSZ-VZ9Gwu-UwxSFvllNM9JYae7fzj4dgXMuAaCzLzJJ87m1kqXp87yTGhIDcp8B5SwN9OytBtVdlNPRF9FPz4FTPm7RcQ9faomnQEH7uVDbcTpvbHtzHvMA3XdGfFdAhLTTigh-n2UonhFOkqihpE556BDIv7ZMBvNSTSB5nTYudmk6j_3x7U9lWCX_88LjA9_iNfSlmYqup-4p5O2jm_4uHxfpXeCE")
                            .imageAlt("A rich chocolate hazelnut tiramisu topped with chopped hazelnuts")
                            .build(),
                        Product.builder()
                            .name("Pistachio Tiramisu")
                            .description("Delicate Pistachio Cream")
                            .price(new BigDecimal("15.00"))
                            .stock(100)
                            .active(true)
                            .category("tiramisu")
                            .imageUrl("https://lh3.googleusercontent.com/aida-public/AB6AXuDF5MB8i6Sglhm5cWTLuXCNqX1DWp0mSenTvt7kSbC-4i6OPeY6-_ffmUi386DPXFfkT6rgbv0Mv2RzRQFidD3UT8QegHq3DcxnQ0QwNHMb8rFeLNEL-5YxNAx82-aCzs20Bm3LRMdGYONSXePY6LjlwaVfzIIq2jCWcP2nutuQXCnqhWGWtyEyHKZn6zD2GbF-9YidfZNXPbXYbfmtbS7zV3Zl9WN8qJct5S5xu9Th7tBRLrGnJuxJN_eavxKtIQVTzZVzshPvVKE")
                            .imageAlt("A delicate pistachio tiramisu with green pistachio cream")
                            .build(),
                        Product.builder()
                            .name("Raspberry Tiramisu")
                            .description("Tangy Raspberry Twist")
                            .price(new BigDecimal("14.50"))
                            .stock(100)
                            .active(true)
                            .category("tiramisu")
                            .imageUrl("https://lh3.googleusercontent.com/aida-public/AB6AXuBF1zzPLODNaIzVQ7rNM0e8Uy3eVyP4P67jFlqeICMQinnfzSDlNBQ1MGIIfAMHeaQcMC0G4-1MKN5cAkR1Sh_MlxOIMYz38acpO4nXJt_M4r3QIkUF3iMZAiSChgJMbNYLF7KLdCT08spW08tayztwKmcNGXAguGFhOmQb41qjdVqvih1PBVhFtmHH7J7ck0PeHLYtALdcG1GIn_gKNCedBbbkYo1ywpjTDHBmJdmEJ_MW3PBkl7heXWHsD37Kb-D9yDhFFPMMdWE")
                            .imageAlt("A raspberry tiramisu layered with fresh raspberries")
                            .build(),
                        Product.builder()
                            .name("Caramel Tiramisu")
                            .description("Sweet & Salty Caramel")
                            .price(new BigDecimal("14.00"))
                            .stock(100)
                            .active(true)
                            .category("tiramisu")
                            .imageUrl("https://lh3.googleusercontent.com/aida-public/AB6AXuATwDTKAaRCSHj7u2iCFS1FKZ3HLk4dUJa18MEAsPiYav8FEH2s8Bq9ZO85ezBg7jtTeuOmbhp3-s0VV0puIHYETh_XocuOFtgUITObW2ELOuQevSlPLEYCUrI-Xrz5ldUtDCyd6_DI8y0tCNDoO7lhPd9oaKJHx7fHRyDr0a8IKgUvRTCis0o8a8gWEx6JLRYmvrdA1-MLzwR5WZkWu539iatO3JkYSXSY7rfqBhk7Tviz9JkQVlidonG1UnnMFE6WyXxV5JDTbwA")
                            .imageAlt("A caramel tiramisu drizzled with rich caramel sauce")
                            .build()
                    );

                    List<Product> missingProducts = new ArrayList<>();
                    for (Product product : defaultProducts) {
                        if (!productRepository.existsByName(product.getName())) {
                        missingProducts.add(product);
                        }
                    }

                    if (!missingProducts.isEmpty()) {
                        productRepository.saveAll(missingProducts);
                    }
    }
}
